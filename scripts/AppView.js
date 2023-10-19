import { Modal } from "./modal.js";

export function AppView() {
  let box = null;
  this.init = function (container) {
    box = container;
  };
  this.renderData = function (data) {
    const imgContainer = document.getElementById("img-container");
    if (data.length > 0) {
      let arr = data.map((i) => item(i));
      imgContainer.innerHTML = arr.join("");
    } else
      imgContainer.innerHTML = `<h2 class="error-msg">Поиск по Вашему запросу не дал результатов</h2>`;
  };
  this.inputClean = function () {
    const input = document.getElementById("search-input");
    input.value = "";
  };
  this.openModal = function (data) {
    const modalWindow = new Modal("modal", "", "close-modal");
    modalWindow.init();
    const modalContent = document.getElementById("modal-content");
    modalContent.innerHTML = modal(data[0]);
  };
  this.closeModal = function () {
    const modalWindow = document.getElementById("modal");
    modalWindow.classList.remove("animation-open");
    modalWindow.classList.add("animation-close");
    setTimeout(() => {
      modalWindow.classList.remove("animation-close");
      modalWindow.classList.remove("visible");
      modalWindow.classList.remove("modal");

      modalWindow.classList.add("invisible");
    }, 500);
    document.documentElement.classList.remove("stopScroll");
  };
}

function item(value) {
  return ` <div class="galery-item"> <h4 class="item-title">${
    value.description ? value.description.slice(0, 30) : "No text"
  }</h4>
        <img src="${value.urls.small}" alt="${value.description} title="${
    value.description
  }" class="item-img" id="${value.id}"></div>`;
}
function modal(value) {
  return ` <div class="modal-item"> <h4 class="modal-title">${
    value.description ? value.description.slice(0, 30) : "No text"
  }</h4>
        <img src="${value.urls.regular}" alt="${value.description} title="${
    value.description
  }" class="modal-img"></div>`;
}
