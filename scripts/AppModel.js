export function AppModel() {
  let view = null;

  let data = [];
  const montharr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "Jule",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let query = montharr[new Date().getMonth()];

  this.init = function (viewbox) {
    view = viewbox;
    this.getFetch();
  };
  this.getFetch = async function () {
    const url = `https://api.unsplash.com/search/photos?query=${query}&per_page=30&orientation=landscape&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo`;
    await fetch(url)
      .then((resp) => resp.json())
      .then((resp) => (data = resp));
    this.renderData();
  };
  this.renderData = function () {
    view.renderData(data.results);
  };
  this.searchData = function (value) {
    query = value;
    this.getFetch();
  };
  this.inputClean = function () {
    view.inputClean();
  };
  this.getVisibleBtn = function () {
    view.getVisibleBtn();
  };
  this.openModal = function (id) {
    const item = data.results.filter((item) => item.id === id);
    view.openModal(item);
  };
  this.closeModal = function () {
    view.closeModal();
  };
}
