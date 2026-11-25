
(() => {
  
  const photoInput = document.querySelector("#label-photo");
  const previewImage = document.querySelector("#label-preview");
  const textInput = document.querySelector("#ingredient-text");
  const analyzeButton = document.querySelector("#analyze-ingredients");
  const progressBar = document.querySelector("#ocr-progress");
  const statusText = document.querySelector("#ocr-status");
  const resultPanel = document.querySelector("#scan-result");

  
  let workerPromise = null;
  let libraryPromise = null;
  let previewUrl = null;
  let initialized = false;

  
  function normalizeText(value) {
    return String(value || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toUpperCase()
      .replace(/\s+/g, " ")
      .trim();
  }

  
  function escapePattern(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  
  function findTerms(text, groups) {
    const matches = [];
    groups.forEach((group) => {
      const found = group.terms.some((term) => {
        const normalizedTerm = normalizeText(term);
        const pattern = new RegExp(`(^|[^A-Z0-9])${escapePattern(normalizedTerm)}(?=$|[^A-Z0-9])`, "g");
        let match = pattern.exec(text);
        while (match) {
          const prefix = text.slice(Math.max(0, match.index - 24), match.index + match[1].length);
          if (!/\b(?:NAO\s+CONTEM|SEM|ISENTO\s+DE)\s*$/.test(prefix)) return true;
          match = pattern.exec(text);
        }
        return false;
      });
      if (found) matches.push(group.label);
    });
    return matches;
  }

  
  function classifyLabel(rawText) {
    const text = normalizeText(rawText);
    const rules = window.FRACELIAN_INGREDIENT_RULES;
    if (!text) return {kind: "unknown", title: "Nenhum texto para revisar", detail: "Fotografe o rótulo ou digite a lista de ingredientes."};
    if (!rules) return {kind: "unknown", title: "Lista de termos indisponível", detail: "A conferência não conseguiu carregar os termos configurados."};

    const noGlutenDeclaration = text.includes(rules.declarations.doesNotContainGluten);
    const textWithoutNegativeDeclaration = text.replace(rules.declarations.doesNotContainGluten, " ");
    const containsGlutenDeclaration = textWithoutNegativeDeclaration.includes(rules.declarations.containsGluten);
    const mayContainGlutenDeclaration = text.includes(rules.declarations.mayContainGluten);
    const sourceMatches = findTerms(text, rules.glutenSources);
    const reviewMatches = findTerms(text, rules.needsSourceReview);

    if (containsGlutenDeclaration || mayContainGlutenDeclaration || sourceMatches.length) {
      if (noGlutenDeclaration) {
        return {
          kind: "conflict",
          title: "Confira a leitura: há informações conflitantes",
          detail: "O texto reconhecido contém uma declaração de ausência e também uma declaração ou termo que exige atenção. Compare com a embalagem.",
          matches: [...sourceMatches, ...(containsGlutenDeclaration ? ["declaração CONTÉM GLÚTEN"] : []), ...(mayContainGlutenDeclaration ? ["declaração PODE CONTER GLÚTEN"] : [])]
        };
      }
      return {
        kind: "alert",
        title: containsGlutenDeclaration ? "O rótulo declara presença de glúten" : mayContainGlutenDeclaration ? "O texto indica possível presença de glúten" : "Possível fonte de glúten encontrada",
        detail: "Confira a embalagem completa e converse com o fabricante se houver dúvida.",
        matches: [...sourceMatches, ...(containsGlutenDeclaration ? ["declaração CONTÉM GLÚTEN"] : []), ...(mayContainGlutenDeclaration ? ["declaração PODE CONTER GLÚTEN"] : [])]
      };
    }

    if (reviewMatches.length) {
      return {
        kind: "review",
        title: "Confirme a origem desses ingredientes",
        detail: "A descrição reconhecida não identifica sozinha a origem usada pelo fabricante.",
        matches: reviewMatches
      };
    }

    if (noGlutenDeclaration) {
      return {
        kind: "declared",
        title: "Declaração ‘NÃO CONTÉM GLÚTEN’ reconhecida",
        detail: "Confira se o OCR leu a embalagem corretamente e se a declaração corresponde ao produto e à versão atuais."
      };
    }

    return {
      kind: "unknown",
      title: "Nenhum termo da lista foi localizado",
      detail: "Isso não confirma ausência de glúten. Confira a declaração no rótulo completo e a informação do fabricante."
    };
  }

  
  function showResult(result) {
    resultPanel.replaceChildren();
    resultPanel.className = `scan-result result-${result.kind}`;
    resultPanel.hidden = false;
    const heading = document.createElement("h3");
    const description = document.createElement("p");
    heading.textContent = result.title;
    description.textContent = result.detail;
    resultPanel.append(heading, description);
    if (result.matches?.length) {
      const list = document.createElement("ul");
      result.matches.forEach((match) => {
        const item = document.createElement("li");
        item.textContent = match;
        list.append(item);
      });
      resultPanel.append(list);
    }
  }

  
  function loadOcrLibrary() {
    if (window.Tesseract) return Promise.resolve(window.Tesseract);
    if (libraryPromise) return libraryPromise;
    libraryPromise = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/tesseract.js@7.0.0/dist/tesseract.min.js";
      script.onload = () => window.Tesseract ? resolve(window.Tesseract) : reject(new Error("OCR não inicializou."));
      script.onerror = () => reject(new Error("Não foi possível carregar o OCR."));
      document.head.append(script);
    }).catch((error) => {
      libraryPromise = null;
      throw error;
    });
    return libraryPromise;
  }

  
  async function getOcrWorker() {
    if (!workerPromise) {
      workerPromise = loadOcrLibrary().then((ocr) => ocr.createWorker("por", 1, {
        logger: (message) => {
          if (message.status === "recognizing text") {
            progressBar.hidden = false;
            progressBar.value = message.progress || 0;
            statusText.textContent = `Lendo o rótulo: ${Math.round((message.progress || 0) * 100)}%.`;
          } else if (message.status) {
            statusText.textContent = "Preparando a leitura do rótulo…";
          }
        }
      })).catch((error) => {
        workerPromise = null;
        throw error;
      });
    }
    return workerPromise;
  }

  
  async function readLabelPhoto(file) {
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      statusText.textContent = "Escolha uma imagem de rótulo.";
      return;
    }
    if (file.size > 12 * 1024 * 1024) {
      statusText.textContent = "A imagem precisa ter até 12 MB. Escolha uma foto menor.";
      return;
    }

    if (previewUrl) URL.revokeObjectURL(previewUrl);
    previewUrl = URL.createObjectURL(file);
    previewImage.src = previewUrl;
    previewImage.hidden = false;
    resultPanel.hidden = true;
    progressBar.value = 0;
    progressBar.hidden = false;
    photoInput.disabled = true;
    analyzeButton.disabled = true;
    statusText.textContent = "Preparando leitura no navegador…";

    try {
      const worker = await getOcrWorker();
      const {data} = await worker.recognize(file);
      textInput.value = data.text.trim();
      progressBar.value = 1;
      progressBar.hidden = true;
      if (!textInput.value) {
        statusText.textContent = "Não foi possível ler o texto. Tente outra foto ou digite os ingredientes.";
        return;
      }
      statusText.textContent = "Revise o texto reconhecido e compare com o rótulo original.";
      showResult(classifyLabel(textInput.value));
    } catch (error) {
      progressBar.hidden = true;
      statusText.textContent = "A leitura automática falhou. Você ainda pode digitar ou colar os ingredientes.";
    } finally {
      photoInput.disabled = false;
      analyzeButton.disabled = false;
    }
  }

  
  function analyzeTypedText() {
    showResult(classifyLabel(textInput.value));
    statusText.textContent = "Confira cada alerta com o rótulo físico do produto.";
  }

  
  function initialize() {
    if (initialized) return;
    initialized = true;
    photoInput.addEventListener("change", () => readLabelPhoto(photoInput.files?.[0]));
    analyzeButton.addEventListener("click", analyzeTypedText);
    textInput.addEventListener("input", () => { resultPanel.hidden = true; });
  }

  
  window.FracellianIngredients = { classifyLabel };
  window.FracellianScanner = { initialize };
})();
