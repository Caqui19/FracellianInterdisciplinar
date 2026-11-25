
(() => {
  
  const listElement = document.querySelector("#places-list");

  
  function appendText(parent, tagName, className, text) {
    const element = document.createElement(tagName);
    if (className) element.className = className;
    element.textContent = text;
    parent.append(element);
    return element;
  }

  
  function makeGoogleSearchUrl(location) {
    const query = location.googleQuery
      || [location.name, location.city, location.state].filter(Boolean).join(" ");
    return query ? `https://www.google.com/search?q=${encodeURIComponent(query)}` : "";
  }

  
  function render() {
    if (!listElement) return;
    const locations = window.FRACELIAN_LOCATIONS || [];
    const categories = window.FRACELIAN_LOCATION_CATEGORIES || {};
    listElement.replaceChildren();

    if (!locations.length) {
      const emptyState = document.createElement("div");
      emptyState.className = "places-empty";
      appendText(emptyState, "h3", "", "Ainda não há lugares cadastrados");
      appendText(emptyState, "p", "", "Os locais aparecerão aqui quando forem adicionados à lista do projeto.");
      listElement.append(emptyState);
      return;
    }

    locations.forEach((location) => {
      const card = document.createElement("article");
      card.className = "place-card";
      appendText(card, "p", "place-category", categories[location.category] || categories.other || "Outro local");
      appendText(card, "h3", "", location.name || "Local sem nome");

      const locality = [location.city, location.state].filter(Boolean).join(" · ");
      if (locality) appendText(card, "p", "place-locality", locality);
      if (location.address) appendText(card, "p", "place-address", location.address);
      if (location.note) appendText(card, "p", "place-note", location.note);

      const actions = document.createElement("div");
      actions.className = "place-actions";
      const googleSearchUrl = makeGoogleSearchUrl(location);
      if (googleSearchUrl) {
        const googleLink = appendText(actions, "a", "", "Pesquisar no Google ↗");
        googleLink.href = googleSearchUrl;
        googleLink.target = "_blank";
        googleLink.rel = "noopener noreferrer";
      }
      if (location.phone) {
        const phoneLink = appendText(actions, "a", "", "Ligar");
        phoneLink.href = `tel:${String(location.phone).replace(/[^\d+]/g, "")}`;
      }
      if (location.url) {
        const siteLink = appendText(actions, "a", "", "Site do local ↗");
        siteLink.href = location.url;
        siteLink.target = "_blank";
        siteLink.rel = "noopener noreferrer";
      }
      if (actions.childElementCount) card.append(actions);
      listElement.append(card);
    });
  }

  
  window.FracellianPlaces = {render};
})();
