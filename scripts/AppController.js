export function AppController() {
  let box = null;
  let model = null;

  this.init = function (mybox, mymodel) {
    box = mybox;
    model = mymodel;
    document.addEventListener("DOMContentLoaded", () => {
      this.watchEvents();
    });
  };
  this.watchEvents = function () {
    document.addEventListener(
      "click",
      (e) => {
        e.preventDefault();
        switch (true) {
          case e.target.id === "search-btn-clean":
            {
              this.inputClean();
            }
            break;
          case e.target.id === "search-btn":
            {
              let data = document.getElementById("search-input").value;
              this.searchData(data);
            }
            break;
          case e.target.classList.contains("item-img"):
            {
              this.openModal(e.target.id);
            }
            break;
          case e.target.id === "close-modal" || e.target.id === "modal":
            {
              e.stopPropagation();
              this.closeModal();
            }
            break;
        }
      },
      true
    );
    document.addEventListener("change", (e) => {
      e.preventDefault();
      switch (true) {
        case e.target.id === "search-input":
          {
            this.searchData(e.target.value);
          }
          break;
      }
    });
  };
  this.inputClean = function () {
    model.inputClean();
  };
  this.searchData = function (value) {
    model.searchData(value);
  };
  this.getVisibleBtn = function () {
    console.log("visible");
    model.getVisibleBtn();
  };
  this.openModal = function (id) {
    model.openModal(id);
  };
  this.closeModal = function () {
    model.closeModal();
  };
}
