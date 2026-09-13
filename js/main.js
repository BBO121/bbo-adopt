// 메뉴 생성 / 검색 / 필터 / 렌더링 담당 파일

const state = {
  species: "ALL",
  keyword: ""
};

function getSpeciesList(list) {
  const set = new Set(list.map((c) => c.species));
  return Array.from(set);
}

function renderFilterMenu() {
  const container = document.getElementById("speciesFilter");
  container.innerHTML = "";

  const speciesList = ["ALL", ...getSpeciesList(characters)];

  speciesList.forEach((sp) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = sp;

    if (sp === state.species) {
      btn.classList.add("active");
    }

    btn.addEventListener("click", () => {
      state.species = sp;
      renderFilterMenu();
      renderList();
    });

    container.appendChild(btn);
  });
}

function matchesFilter(c) {
  const speciesMatch = state.species === "ALL" || c.species === state.species;

  const keyword = state.keyword.trim().toLowerCase();
  const searchMatch =
    !keyword ||
    c.name.toLowerCase().includes(keyword) ||
    c.species.toLowerCase().includes(keyword);

  return speciesMatch && searchMatch;
}

function setPlaceholder(imageWrap) {
  imageWrap.innerHTML = "";
  imageWrap.classList.add("placeholder");
  imageWrap.textContent = "NO IMAGE";
}

function createImageBlock(src, alt) {
  const imageWrap = document.createElement("div");
  imageWrap.className = "character-image";

  if (!src) {
    setPlaceholder(imageWrap);
    return imageWrap;
  }

  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;
  img.addEventListener("error", () => setPlaceholder(imageWrap), { once: true });
  imageWrap.appendChild(img);

  return imageWrap;
}

function createImageElement(c) {
  // 복수 이미지 구조 (예: 뜨개뽀기의 뜨개 / 아트). 없으면 기존 단일 image 필드를 사용.
  if (Array.isArray(c.images) && c.images.length > 0) {
    const group = document.createElement("div");
    group.className = "character-image-group";

    c.images.forEach((entry) => {
      const figure = document.createElement("figure");
      figure.className = "character-image-entry";

      figure.appendChild(createImageBlock(entry.src, `${c.name} - ${entry.type || ""}`));

      if (entry.type) {
        const caption = document.createElement("figcaption");
        caption.className = "character-image-label";
        caption.textContent = entry.type;
        figure.appendChild(caption);
      }

      group.appendChild(figure);
    });

    return group;
  }

  return createImageBlock(c.image, c.name);
}

function createCreditItem(label, value) {
  const item = document.createElement("div");
  item.className = `credit-item credit-item-${label.toLowerCase()}`;

  const labelEl = document.createElement("span");
  labelEl.className = "credit-label";
  labelEl.textContent = label;

  const valueEl = document.createElement("span");
  valueEl.className = "credit-value";
  valueEl.textContent = value;

  item.appendChild(labelEl);
  item.appendChild(valueEl);

  return item;
}

function createCreditsElement(c) {
  const credits = document.createElement("div");
  credits.className = "character-credits";

  credits.appendChild(createCreditItem("S", c.s));
  credits.appendChild(createCreditItem("D", c.d));
  credits.appendChild(createCreditItem("A", c.a));

  return credits;
}

function createPriceElement(price) {
  const priceEl = document.createElement("div");
  priceEl.className = "character-price";

  const options = Array.isArray(price) ? price : [price];

  options.forEach((option, index) => {
    if (index > 0) {
      const or = document.createElement("span");
      or.className = "price-or";
      or.textContent = "or";
      priceEl.appendChild(or);
    }

    const optionEl = document.createElement("span");
    optionEl.className = "price-option";
    optionEl.textContent = option;
    priceEl.appendChild(optionEl);
  });

  return priceEl;
}

function createInfoElement(c) {
  const info = document.createElement("div");
  info.className = "character-info";

  const name = document.createElement("h2");
  name.className = "character-name";
  name.textContent = c.name;

  const species = document.createElement("p");
  species.className = "character-species";
  species.textContent = c.species;

  info.appendChild(name);
  info.appendChild(species);
  info.appendChild(createCreditsElement(c));

  if (c.description) {
    const description = document.createElement("p");
    description.className = "character-description";
    description.textContent = c.description;
    info.appendChild(description);
  }

  if (c.price) {
    info.appendChild(createPriceElement(c.price));
  }

  if (c.link) {
    const link = document.createElement("a");
    link.className = "character-link";
    link.href = c.link;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "개체 상세정보";
    info.appendChild(link);
  }

  return info;
}

function createCharacterElement(c) {
  const item = document.createElement("article");
  item.className = "character-item";

  item.appendChild(createImageElement(c));
  item.appendChild(createInfoElement(c));

  return item;
}

function renderList() {
  const listEl = document.getElementById("characterList");
  const emptyEl = document.getElementById("emptyMessage");

  listEl.innerHTML = "";

  const filtered = characters.filter(matchesFilter);

  if (filtered.length === 0) {
    emptyEl.hidden = false;
    return;
  }

  emptyEl.hidden = true;
  filtered.forEach((c) => listEl.appendChild(createCharacterElement(c)));
}

function initSearch() {
  const input = document.getElementById("searchInput");
  input.addEventListener("input", (e) => {
    state.keyword = e.target.value;
    renderList();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderFilterMenu();
  initSearch();
  renderList();
});
