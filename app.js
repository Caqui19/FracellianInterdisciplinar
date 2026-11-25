
const topics = [
  {
    title: "Contaminação cruzada", icon: "↗", tag: "Segurança no dia a dia",
    summary: "Glúten pode passar de mãos, utensílios, superfícies e equipamentos para uma refeição sem glúten.",
    prompt: "Uma migalha já pode contaminar",
    explanation: ["Contaminação cruzada é a transferência de glúten para um alimento que não o teria como ingrediente. Pode acontecer por uma faca, colher, tábua, pano, esponja, óleo ou água de cozimento compartilhados.", "O glúten é uma proteína: aquecer, assar, ferver, usar álcool ou água sanitária não o torna seguro. A remoção depende de limpeza eficaz com água e detergente, além de evitar utensílios e equipamentos difíceis de limpar que guardem resíduos."],
    good: ["Lave mãos, bancada e utensílios com água e detergente antes de começar.", "Prepare primeiro a comida sem glúten e mantenha ingredientes e utensílios protegidos.", "Use torradeira, peneira, escorredor, tábuas e utensílios porosos exclusivos quando não for possível limpar com segurança.", "Sirva com talheres limpos e separados; uma faca usada no bolo comum não deve cortar o bolo sem glúten."],
    errors: ["Retirar a parte visivelmente contaminada e servir o restante.", "Compartilhar torradeira, óleo de fritura, água do macarrão, colher ou pote de manteiga com migalhas.", "Achar que calor, álcool ou água sanitária neutralizam o glúten."],
    curiosities: ["Uma superfície que parece limpa ainda pode ter migalhas ou resíduos; limpeza e prevenção trabalham juntas.", "A farinha suspensa no ar pode se depositar sobre superfícies. Evite preparar farinha de trigo junto da refeição sem glúten."],
    warning: "Cada pessoa celíaca pode ter necessidades específicas. Combine o preparo com ela e não prometa segurança se houver dúvida."
  },
  {
    title: "Leitura de rótulos", icon: "⌕", tag: "No mercado",
    summary: "Confira ingredientes e declarações no rótulo a cada compra; produtos e fórmulas podem mudar.",
    prompt: "Leia o rótulo inteiro, sempre",
    explanation: ["No Brasil, a Lei nº 10.674/2003 exige que alimentos industrializados tragam a declaração “contém glúten” ou “não contém glúten”, conforme o caso, em caracteres destacados, nítidos e de fácil leitura.", "A rotulagem de alergênicos da Anvisa atende a outro objetivo. A RDC nº 26/2015 foi consolidada na atual RDC nº 727/2022, que exige que as advertências aplicáveis a alergênicos sejam legíveis, em caixa alta e negrito. Exemplos são “ALÉRGICOS: CONTÉM...” e “ALÉRGICOS: PODE CONTER...”. Essas advertências não substituem a declaração sobre glúten, exigida por lei própria, e a doença celíaca não é uma alergia alimentar."],
    good: ["Leia a lista de ingredientes e procure a declaração sobre glúten em toda compra.", "Confira também os avisos de alergênicos, que são informação complementar.", "Se a embalagem estiver ilegível ou a informação for contraditória, não suponha: confirme com o fabricante ou escolha um produto cuja informação esteja clara.", "Cheque novamente produtos comprados com frequência, pois ingredientes e processos podem mudar."],
    errors: ["Usar uma lembrança antiga do rótulo como garantia atual.", "Tratar “pode conter” de alergênicos como única informação necessária sobre glúten.", "Achar que “sem trigo” significa necessariamente sem glúten: centeio, cevada e contaminação também importam."],
    curiosities: ["A Lei nº 10.674/2003 e as regras de alergênicos da Anvisa são normas diferentes e complementares.", "A declaração prevista para alimentos industrializados não responde, por si só, como um prato foi preparado em restaurante."],
    source: [{label:"Lei nº 10.674/2003 (Planalto)",url:"https://www.planalto.gov.br/ccivil_03/leis/2003/l10.674.htm"},{label:"Rotulagem de alimentos alergênicos (Anvisa)",url:"https://www.gov.br/anvisa/pt-br/assuntos/alimentos/rotulagem"}],
    warning: "Conteúdo informativo. A legislação pode ser atualizada; em caso de dúvida sobre um produto, consulte o fabricante e orientação especializada."
  },
  {
    title: "Restaurantes", icon: "⌂", tag: "Comer fora",
    summary: "Pergunte como o prato é preparado, inclusive sobre fritadeira, grelha, molhos e utensílios.",
    prompt: "Explique em uma frase e pergunte com objetividade",
    explanation: ["O risco pode estar no preparo compartilhado, mesmo quando os ingredientes do prato parecem adequados: fritadeira, chapa, água de cozimento, farinha no ambiente, utensílios e molhos são exemplos para conversar com a equipe.", "Ligar antes do horário de pico pode facilitar a conversa. A pessoa celíaca conhece suas necessidades e deve poder decidir se as respostas do estabelecimento são suficientes para ela."],
    good: ["Diga: “Tenho doença celíaca e preciso evitar contato com glúten. Como este prato é preparado?”", "Pergunte sobre óleo de fritura, grelha/chapa, molhos, água de cozimento e utensílios compartilhados.", "Peça que a equipe confirme com quem prepara o prato; se não souberem responder, escolha outra opção ou outro local.", "Combine com a pessoa celíaca e respeite a decisão dela, sem pressionar."],
    errors: ["Perguntar apenas se o prato é “sem glúten” sem explicar a necessidade de evitar contato cruzado.", "Presumir que retirar croutons, empanado ou pão torna o prato seguro.", "Aceitar fritura feita no mesmo óleo de alimentos empanados sem confirmar."],
    curiosities: ["Um preparo simples pode ser mais fácil de avaliar, mas só a equipe do local pode explicar como foi feito.", "Avisar com antecedência ajuda a equipe a se organizar; não garante, por si só, ausência de contato cruzado."],
    warning: "Práticas variam entre estabelecimentos e podem mudar conforme equipe e movimento. A pessoa celíaca decide se considera as informações confiáveis."
  },
  {
    title: "Recebendo alguém em casa", icon: "⌂", tag: "Na sua casa",
    summary: "Pergunte com antecedência o que a pessoa precisa e planeje uma refeição segura em conjunto.",
    prompt: "Perguntar também é cuidado",
    explanation: ["Uma boa recepção começa antes de cozinhar. Confirme diretamente com a pessoa quais cuidados funcionam para ela e evite improvisar com ingredientes ou utensílios de origem incerta.", "A farinha de trigo pode ficar suspensa e depois se depositar. Se for possível, não manipule farinha de trigo e derivados na cozinha nas 24 horas anteriores; esse intervalo é uma medida preventiva conservadora, não uma garantia científica universal. Limpe as superfícies antes do preparo e mantenha a comida protegida."],
    good: ["Antes de limpar a bancada, evite manipular farinha de trigo e derivados na cozinha nas 24 horas anteriores, quando possível.", "Depois, limpe bancada, mãos e utensílios com água e detergente; retire migalhas e use panos limpos.", "Separe ingredientes, potes, utensílios e áreas de preparo; confirme com a pessoa o que precisa ser exclusivo.", "Prepare e sirva a comida sem glúten primeiro, protegendo-a de respingos e migalhas."],
    errors: ["Cozinhar com farinha de trigo no mesmo ambiente pouco antes e confiar apenas em passar um pano seco.", "Usar a mesma faca nos bolos comum e sem glúten.", "Servir comida sem saber a procedência do ingrediente ou como foi armazenado."],
    curiosities: ["Potes de manteiga, requeijão, geleia e temperos podem receber migalhas de facas compartilhadas.", "A pessoa convidada pode preferir levar um alimento que já conhece; isso não é falta de confiança ou educação."],
    warning: "Se não for possível garantir os cuidados combinados, converse com honestidade e ofereça alternativas."
  },
  {
    title: "Amigos e familiares", icon: "♡", tag: "Relações",
    summary: "Apoiar é levar a sério, incluir nos planos e deixar a pessoa conduzir as próprias escolhas.",
    prompt: "A pessoa é mais do que o diagnóstico",
    explanation: ["A doença celíaca exige atenção contínua à alimentação, mas não define a pessoa. Uma conversa respeitosa ajuda a entender como apoiar sem assumir o controle ou minimizar riscos."],
    good: ["Pergunte como pode ajudar e escute a resposta.", "Ao escolher um local ou evento, consulte opções e convide a pessoa para decidir junto.", "Leve a sério a necessidade de evitar contato cruzado, mesmo quando a quantidade parece pequena.", "Aceite um “não, obrigado” sem insistir e mantenha o convite aberto."],
    errors: ["Dizer que “só um pouquinho não faz mal” ou que a pessoa está exagerando.", "Pressionar para provar um alimento ou explicar a condição repetidamente.", "Falar pela pessoa sem perguntar se ela quer ajuda."],
    curiosities: ["Um convite inclusivo costuma começar com uma pergunta simples: “O que deixaria isso mais fácil para você?”"],
    warning: "As necessidades e preferências variam. Perguntar diretamente é melhor do que presumir."
  },
  {
    title: "Escola e infância", icon: "✎", tag: "Na escola",
    summary: "Família, escola e criança podem combinar rotinas para incluir atividades e refeições com segurança.",
    prompt: "Combine os cuidados antes da atividade",
    explanation: ["Uma parceria clara ajuda a criança a participar de refeições, festas, aulas e brincadeiras sem ficar de fora. A escola deve saber quais alimentos e procedimentos foram combinados com a família.", "Massinhas industrializadas também merecem atenção: algumas podem conter trigo ou outros ingredientes com glúten. Confira a composição e evite que a criança leve as mãos à boca durante a atividade; lave as mãos ao terminar."],
    good: ["Combine com responsáveis e equipe como serão lanches, festas, passeios e armazenamento de alimentos.", "Confira ingredientes de massinhas, materiais sensoriais e atividades com farinha; não presuma que material de brincar é livre de glúten.", "Use utensílios e superfícies limpos e mantenha o lanche identificado e protegido.", "Ouça a criança de acordo com sua idade, sem expô-la ou isolá-la desnecessariamente."],
    errors: ["Entregar uma comida diferente sem verificar preparo e contato cruzado.", "Usar massinha ou material com trigo sem considerar mãos, boca e limpeza posterior.", "Deixar a criança responsável sozinha por explicar e fiscalizar todos os cuidados."],
    curiosities: ["Um plano simples por escrito pode ajudar professores substitutos e equipes de eventos a seguir os combinados."],
    warning: "Organize o plano individual com a família e, quando necessário, com a equipe de saúde da criança."
  },
  {
    title: "Trabalho e convivência", icon: "▤", tag: "No trabalho",
    summary: "Pequenos combinados ajudam em reuniões, viagens e refeições compartilhadas no trabalho.",
    prompt: "A inclusão começa no planejamento",
    explanation: ["Eventos de trabalho podem envolver comida, bancadas compartilhadas e equipamentos de uso comum. A pessoa deve poder explicar o que precisa sem ser obrigada a justificar sua condição a cada ocasião."],
    good: ["Pergunte com antecedência sobre necessidades alimentares e confirme os ingredientes com quem fornece a refeição.", "Mantenha alimentos identificados e fechados; lave superfícies e mãos antes de preparar ou servir.", "Considere que torradeiras, fornos, micro-ondas, potes e utensílios compartilhados podem ter migalhas ou resíduos. Limpe o micro-ondas antes de usar recipiente aberto e não compartilhe talheres ou recipientes sujos.", "Ofereça uma alternativa confiável ou permita que a pessoa leve a própria refeição sem constrangimento."],
    errors: ["Usar a mesma torradeira sem proteção para pães com e sem glúten.", "Colocar alimento descoberto em micro-ondas com respingos ou migalhas e presumir que o aquecimento resolve.", "Compartilhar pote, faca, tábua ou pinça após contato com pão comum."],
    curiosities: ["Um recipiente fechado e limpo protege a comida durante o armazenamento e o aquecimento."],
    warning: "Converse com a pessoa sobre os cuidados que ela considera necessários para aquele espaço."
  },
  {
    title: "Mitos comuns", icon: "?", tag: "Informação",
    summary: "Informação clara ajuda a acolher sem minimizar o cuidado necessário para a doença celíaca.",
    prompt: "Curiosidade respeitosa abre conversa",
    explanation: ["Doença celíaca é uma condição autoimune desencadeada pelo glúten em pessoas predispostas. Ela não é a mesma coisa que alergia ao trigo nem que sensibilidade ao glúten não celíaca; investigação e acompanhamento variam."],
    good: ["Use fontes de saúde confiáveis e atualizadas.", "Pergunte à pessoa como prefere falar sobre sua condição.", "Reconheça que evitar contato cruzado faz parte dos cuidados alimentares para doença celíaca."],
    errors: ["Dizer que doença celíaca é apenas uma preferência alimentar.", "Confundir alergia ao trigo com doença celíaca.", "Afirmar que cozinhar ou remover a parte visível elimina o glúten."],
    curiosities: ["Glúten não é um microrganismo: desinfetantes não o “matam”. A limpeza física remove resíduos; o principal é prevenir transferência."],
    warning: "Uma explicação geral não substitui avaliação individual de saúde."
  },
  {
    title: "Perguntas frequentes", icon: "…", tag: "Dúvidas",
    summary: "Respostas introdutórias para começar uma conversa sobre glúten, exames e rotina.",
    prompt: "Perguntar é um bom começo",
    explanation: ["As dúvidas são comuns e a resposta pode depender do diagnóstico, do produto e da forma de preparo. Use este guia como ponto de partida e confirme informações importantes com fontes confiáveis e profissionais."],
    good: ["Anote a pergunta e o contexto (produto, rótulo, local ou preparo).", "Para diagnóstico e sintomas, procure atendimento profissional.", "Para alimentos embalados, confira a declaração de glúten e os ingredientes em cada compra."],
    errors: ["Usar uma resposta geral para decidir sobre todos os produtos ou situações.", "Começar dieta sem glúten antes de conversar com profissional quando ainda se investiga o diagnóstico."],
    curiosities: ["Doença celíaca pode ser investigada em pessoas com sintomas variados e em parentes de primeiro grau; a avaliação é individual."],
    warning: "Este material é educativo e não diagnostica nem prescreve tratamento."
  },
  {
    title: "Primeiros passos", icon: "♡", tag: "Depois do diagnóstico",
    summary: "Comece com apoio profissional, informação confiável e mudanças organizadas no seu ritmo.",
    prompt: "Um passo possível para esta semana",
    explanation: ["A doença celíaca é uma condição crônica. Depois da confirmação, o tratamento recomendado é uma dieta rigorosamente sem glúten acompanhada por profissionais de saúde.", "O glúten está associado principalmente ao trigo, ao centeio e à cevada. A aveia pode sofrer contaminação durante cultivo ou processamento; converse com sua equipe sobre produtos identificados como sem glúten e sobre o que é apropriado para você."],
    good: ["Se ainda está investigando, converse com o médico antes de retirar o glúten: a dieta pode interferir nos exames.", "Após diagnóstico, peça apoio de médico e nutricionista com experiência na condição.", "Comece aprendendo sobre rótulos, organização da cozinha e prevenção de contato cruzado.", "Anote dúvidas e faça as mudanças por etapas, sem tentar resolver tudo em um dia."],
    errors: ["Retirar glúten antes da avaliação diagnóstica sem orientação profissional.", "Achar que apenas pães e massas contêm glúten.", "Tentar fazer mudanças drásticas sem apoio e informação adequada."],
    curiosities: ["A aveia não é equivalente a trigo, centeio ou cevada, mas a contaminação cruzada é possível e a tolerância individual deve ser discutida com a equipe de saúde."],
    source: [{label:"Protocolo Clínico e Diretrizes Terapêuticas (Ministério da Saúde)",url:"https://www.gov.br/saude/pt-br/assuntos/pcdt/d/doenca-celiaca"}],
    warning: "Não inicie ou interrompa uma dieta terapêutica por conta própria. Procure avaliação profissional."
  },
  {
    title: "Diagnóstico e acompanhamento", icon: "＋", tag: "Saúde",
    summary: "Exames e acompanhamento precisam ser interpretados por profissionais de saúde.",
    prompt: "Leve suas dúvidas anotadas",
    explanation: ["A investigação pode envolver avaliação clínica, exames de sangue e, em muitos casos, endoscopia com biópsia. A equipe decide quais exames são adequados e interpreta o conjunto dos resultados.", "Manter glúten na alimentação durante a investigação costuma ser importante para que os exames possam detectar a condição. Não mude a dieta antes de conversar com o médico."],
    good: ["Converse com médico antes de iniciar dieta sem glúten se ainda não recebeu diagnóstico.", "Leve sintomas, histórico e resultados de exames à consulta.", "Após confirmação, combine o acompanhamento com médico e nutricionista."],
    errors: ["Fazer dieta sem glúten antes dos exames sem orientação.", "Interpretar um resultado isolado como diagnóstico.", "Usar sintomas ou melhora após retirar glúten como confirmação por conta própria."],
    curiosities: ["Parentes de primeiro grau têm maior probabilidade de doença celíaca e podem conversar com um profissional sobre investigação, mesmo sem sintomas."],
    source: [{label:"PCDT Doença Celíaca (Ministério da Saúde)",url:"https://www.gov.br/saude/pt-br/assuntos/pcdt/d/doenca-celiaca"}],
    warning: "O diagnóstico e a decisão sobre exames cabem à equipe de saúde."
  },
  {
    title: "Alimentos de atenção", icon: "⚠", tag: "Essencial",
    summary: "Molhos, embutidos, temperos prontos, achocolatados, sorvetes e suplementos pedem conferência do rótulo.",
    prompt: "O glúten pode aparecer onde você não espera",
    explanation: ["Trigo, centeio e cevada podem aparecer em alimentos óbvios e em produtos industrializados como ingredientes, espessantes ou componentes de preparações. A composição muda entre marcas e ao longo do tempo.", "Aveia exige atenção por possível contaminação na cadeia de produção. Produtos como massinhas de modelar também podem conter trigo e não devem ser tratados como alimento seguro."],
    good: ["Confira rótulo e declaração de glúten a cada compra, mesmo em produtos conhecidos.", "Verifique molhos, embutidos, temperos, bebidas, doces, sorvetes, suplementos e medicamentos com o fabricante ou profissional quando houver dúvida.", "Guarde embalagens ou fotografe o rótulo para confirmar informações com a equipe de saúde."],
    errors: ["Confiar na embalagem antiga ou em uma lista genérica de produtos.", "Presumir que todo produto de aveia é adequado para pessoas celíacas.", "Achar que medicamento ou suplemento nunca precisa de conferência."],
    curiosities: ["Cerveja tradicional costuma ser feita com cevada; procure informação explícita e confiável sobre glúten."],
    warning: "A composição varia por marca e lote. Consulte a embalagem atual e, quando necessário, o fabricante e a equipe de saúde."
  },
  {
    title: "Viagens", icon: "⌁", tag: "Fora de casa",
    summary: "Planejamento pode ajudar a encontrar refeições e alternativas durante o percurso.",
    prompt: "Planeje o que puder e mantenha opções de apoio",
    explanation: ["Rotinas e disponibilidade de alimentos mudam entre destinos. Pesquisar com antecedência ajuda, mas não garante que um estabelecimento ou produto esteja livre de contato cruzado."],
    good: ["Pesquise restaurantes e mercados e confirme práticas diretamente com o local.", "Leve lanches embalados que você já conhece, considerando as regras da viagem.", "Tenha uma explicação curta sobre sua necessidade e informações médicas relevantes acessíveis."],
    errors: ["Confiar apenas em avaliações antigas de restaurantes.", "Supor que a mesma marca tem a mesma composição em todos os países."],
    curiosities: ["Cartões traduzidos sobre a necessidade alimentar podem facilitar a conversa em viagens internacionais."],
    warning: "Verifique regras locais de transporte e confirme ingredientes e preparo no destino."
  },
  {
    title: "Direitos e acesso", icon: "≋", tag: "Cidadania",
    summary: "Consulte fontes oficiais para entender rotulagem, serviços e direitos aplicáveis à sua situação.",
    prompt: "Procure a regra e a orientação atual",
    explanation: ["No Brasil, a Lei nº 10.674/2003 determina a declaração “contém glúten” ou “não contém glúten” em alimentos industrializados, em caracteres destacados, nítidos e de fácil leitura.", "A RDC nº 26/2015 tratava da rotulagem dos principais alergênicos; suas disposições foram consolidadas na RDC nº 727/2022. As advertências aplicáveis a alergênicos devem ser legíveis, em caixa alta e negrito, e podem usar expressões como “ALÉRGICOS: CONTÉM...” e “ALÉRGICOS: PODE CONTER...”. Elas não substituem a declaração sobre glúten. O escopo depende do tipo de produto e das exceções da regulamentação."],
    good: ["Consulte o texto legal e a página oficial da Anvisa para regras atuais.", "Guarde fotos do rótulo e dados do produto se precisar pedir esclarecimento ou registrar uma reclamação.", "Para uma situação individual, procure orientação jurídica ou serviço público competente."],
    errors: ["Afirmar que a RDC de alergênicos é a regra que exige a declaração de glúten.", "Supor que a regra de alimentos industrializados resolve o preparo de refeições em estabelecimentos.", "Confiar em resumo antigo sem verificar alterações e exceções."],
    curiosities: ["A Lei nº 10.674/2003 é a referência específica para a declaração sobre glúten; regras de alergênicos têm escopo diferente."],
    source: [{label:"Lei nº 10.674/2003 (Planalto)",url:"https://www.planalto.gov.br/ccivil_03/leis/2003/l10.674.htm"},{label:"RDC nº 727/2022 (Anvisa)",url:"https://www.in.gov.br/en/web/dou/-/resolucao-rdc-n-727-de-1-de-julho-de-2022-413249279"},{label:"Rotulagem de alimentos (Anvisa)",url:"https://www.gov.br/anvisa/pt-br/assuntos/alimentos/rotulagem"}],
    warning: "Este resumo não é aconselhamento jurídico. Regras e sua aplicação podem mudar; confirme em fontes oficiais."
  },
  {
    title: "Profissionais de saúde", icon: "✚", tag: "Cuidado",
    summary: "Uma equipe que escuta e acompanha pode ajudar a organizar diagnóstico, alimentação e seguimento.",
    prompt: "Você merece ser ouvido com respeito",
    explanation: ["O cuidado pode envolver médico e nutricionista, com outros profissionais conforme as necessidades individuais. Exames, sintomas e alimentação devem ser avaliados no contexto de cada pessoa."],
    good: ["Leve perguntas, exames e uma lista de medicamentos e suplementos.", "Peça que expliquem objetivos, alternativas e próximos passos em linguagem clara.", "Avise antes de alterar a alimentação ou suspender tratamento."],
    errors: ["Substituir uma consulta por listas de internet.", "Parar acompanhamento quando os sintomas melhoram sem conversar com a equipe."],
    curiosities: ["Acompanhamento pode continuar importante mesmo quando a pessoa se sente bem."],
    warning: "Procure profissionais habilitados para decisões sobre diagnóstico e tratamento."
  },
  {
    title: "Como oferecer ajuda", icon: "☼", tag: "Apoio",
    summary: "Ofereça opções práticas e respeite a escolha da pessoa, sem decidir por ela.",
    prompt: "A melhor ajuda é a que a pessoa aceita",
    explanation: ["Apoio funciona melhor quando combina com o que a pessoa precisa naquele momento. Uma pergunta direta evita suposições e deixa espaço para autonomia."],
    good: ["Pergunte: “Quer que eu procure um lugar com você?” ou “Prefere trazer algo que já conhece?”.", "Ajude a confirmar ingredientes e preparo se a pessoa pedir.", "Respeite limites, escolhas e privacidade."],
    errors: ["Comprar ou preparar algo sem conferir e dizer que está seguro.", "Insistir depois de ouvir um não.", "Transformar a condição em assunto público sem autorização."],
    curiosities: ["Apoiar também pode ser ajudar a encontrar uma opção sem comida, para que todos participem."],
    warning: "Pergunte antes de agir. A pessoa celíaca conhece suas prioridades e limites."
  }
];

const grid = document.querySelector("#grid");
const topicsSection = document.querySelector("#topics");
const cordLayer = document.querySelector(".cord-layer");

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[char]);
}

function render() {
  grid.innerHTML = topics.map((topic, id) => {
    return `<article class="card"><div class="card-top"><span class="tag-dot" aria-hidden="true"></span><span class="tag">${escapeHTML(topic.tag)}</span></div><h3>${escapeHTML(topic.title)}</h3><p>${escapeHTML(topic.summary)}</p><button class="open-topic" type="button" data-id="${id}">Saiba mais <span aria-hidden="true">→</span></button></article>`;
  }).join("");
  grid.querySelectorAll("[data-id]").forEach((button) => button.addEventListener("click", () => showTopic(topics[Number(button.dataset.id)])));
  drawCords();
}

function drawCords() {
  if (!cordLayer || !topicsSection) return;
  const cards = [...grid.querySelectorAll(".card")];
  const sectionRect = topicsSection.getBoundingClientRect();
  const gridRect = grid.getBoundingClientRect();
  const width = Math.max(1, topicsSection.clientWidth);
  const height = Math.max(1, topicsSection.scrollHeight);
  const rows = [];
  cards.forEach((card) => {
    const top = card.offsetTop;
    const row = rows.find((item) => item.top === top);
    if (!row) rows.push({top});
  });
  cordLayer.setAttribute("viewBox", `0 0 ${width} ${height}`);
  cordLayer.setAttribute("preserveAspectRatio", "none");
  const singleColumn = getComputedStyle(grid).gridTemplateColumns.split(" ").length === 1;
  const cordRows = singleColumn ? cards.map((card) => ({top: card.offsetTop})) : rows;
  cordLayer.innerHTML = cordRows.map(({top}) => {
    const y = Math.round(gridRect.top - sectionRect.top + top - 6);
    return `<path d="M 0 ${y} H ${width}"/>`;
  }).join("");
}

function list(items, className) {
  if (!items?.length) return "";
  return `<ul class="detail-list ${className}">${items.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul>`;
}

function showTopic(topic) {
  document.querySelector("#dialog-tag").textContent = topic.tag;
  document.querySelector("#dialog-title").textContent = topic.title;
  const box = document.querySelector(".detail-box");
  box.innerHTML = `<h3>Resumo</h3><p>${escapeHTML(topic.summary)}</p><small class="detail-prompt">${escapeHTML(topic.prompt)}</small>`;
  const sections = [
    ["Explicação", topic.explanation, "paragraphs"],
    ["Boas práticas", topic.good, "good"],
    ["Erros comuns", topic.errors, "errors"],
    ["Curiosidades", topic.curiosities, "curiosities"]
  ];
  const body = document.querySelector("#dialog-sections");
  body.innerHTML = sections.map(([heading, items, type]) => {
    if (!items?.length || (type === "paragraphs" && items.length === 0)) return "";
    return `<section class="detail-section"><h3>${heading}</h3>${type === "paragraphs" ? items.map((item) => `<p>${escapeHTML(item)}</p>`).join("") : list(items, type)}</section>`;
  }).join("");
  if (topic.warning) body.insertAdjacentHTML("beforeend", `<p class="detail-warning">${escapeHTML(topic.warning)}</p>`);
  if (topic.source?.length) body.insertAdjacentHTML("beforeend", `<section class="detail-section source-links"><h3>Fontes oficiais</h3><ul>${topic.source.map((source) => `<li><a href="${escapeHTML(source.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(source.label)} ↗</a></li>`).join("")}</ul></section>`);
  document.querySelector("#detail").showModal();
}

function selectFeature(name, focusTab = false) {
  const tabs = [...document.querySelectorAll("[data-feature-tab]")];
  const panels = [...document.querySelectorAll("[data-feature-panel]")];
  tabs.forEach((tab) => {
    const selected = tab.dataset.featureTab === name;
    tab.classList.toggle("active", selected);
    tab.setAttribute("aria-selected", String(selected));
    tab.tabIndex = selected ? 0 : -1;
    if (selected && focusTab) tab.focus();
  });
  panels.forEach((panel) => { panel.hidden = panel.dataset.featurePanel !== name; });
  if (name === "info") requestAnimationFrame(drawCords);
  if (name === "places") window.FracellianPlaces?.render();
  if (name === "scanner") window.FracellianScanner?.initialize();
}

const featureTabs = [...document.querySelectorAll("[data-feature-tab]")];
featureTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => selectFeature(tab.dataset.featureTab));
  tab.addEventListener("keydown", (event) => {
    let nextIndex = index;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % featureTabs.length;
    else if (event.key === "ArrowLeft") nextIndex = (index - 1 + featureTabs.length) % featureTabs.length;
    else if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = featureTabs.length - 1;
    else return;
    event.preventDefault();
    selectFeature(featureTabs[nextIndex].dataset.featureTab, true);
  });
});

document.querySelector(".close").addEventListener("click", () => document.querySelector("#detail").close());
document.querySelector("#detail").addEventListener("click", (event) => { if (event.target === event.currentTarget) event.currentTarget.close(); });
const menu = document.querySelector(".menu");
menu.addEventListener("click", () => {
  const nav = document.querySelector(".nav");
  const isOpen = menu.getAttribute("aria-expanded") !== "true";
  menu.setAttribute("aria-expanded", String(isOpen));
  nav.classList.toggle("open", isOpen);
});
document.querySelectorAll(".nav a").forEach((link) => link.addEventListener("click", () => { menu.setAttribute("aria-expanded", "false"); document.querySelector(".nav").classList.remove("open"); }));
document.querySelectorAll('a[href="#about"]').forEach((link) => link.addEventListener("click", () => selectFeature("info")));
if ("ResizeObserver" in window) new ResizeObserver(() => requestAnimationFrame(drawCords)).observe(grid);
window.addEventListener("resize", () => requestAnimationFrame(drawCords), {passive:true});

function startIntro() {
  render();
  document.documentElement.dataset.appInitialized = "true";
  const splash = document.querySelector("#intro-splash");
  if (!splash) return;
  const body = document.body;
  const parts = [...body.children].reduce((visible, part) => {
    if (part !== splash) visible.push(part);
    return visible;
  }, []);
  parts.forEach((part) => { part.inert = true; });
  const name = document.querySelector(".intro-title");
  name.innerHTML = [...name.textContent].map((letter, index) => `<span style="--letter:${index}" aria-hidden="true">${letter === " " ? "&nbsp;" : escapeHTML(letter)}</span>`).join("");
  name.setAttribute("aria-label", "Fracellian");
  let done = false;
  const finish = () => {
    if (done) return;
    done = true;
    body.classList.add("intro-ready");
    body.classList.add("intro-closing");
    window.setTimeout(() => {
      body.classList.remove("intro-active", "intro-closing");
      parts.forEach((part) => { part.inert = false; });
      splash.remove();
    }, 550);
  };
  const minimumWait = new Promise((resolve) => window.setTimeout(resolve, 1280));
  const pageLoaded = document.readyState === "complete"
    ? Promise.resolve()
    : new Promise((resolve) => window.addEventListener("load", resolve, {once:true}));
  const imagesReady = Promise.all([...document.images].map((image) => {
    if (image.complete) return image.decode?.().catch(() => undefined);
    return new Promise((resolve) => {
      image.addEventListener("load", resolve, {once:true});
      image.addEventListener("error", resolve, {once:true});
    });
  }));
  Promise.all([minimumWait, pageLoaded, imagesReady, document.fonts?.ready ?? Promise.resolve()]).then(finish);
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", startIntro, {once:true});
else startIntro();

