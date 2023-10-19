import { AppModel } from "./AppModel.js";
import { AppView } from "./AppView.js";
import { AppController } from "./AppController.js";

const app = document.getElementById("container");
const myapp = (function () {
  AppView;
  AppModel;
  AppController;
  return {
    init: function (container) {
      const view = new AppView();
      const controller = new AppController();
      const model = new AppModel();
      view.init(container);
      model.init(view);
      controller.init(container, model);
    },
  };
})();
myapp.init(app);

console.log(
  `Все пункты тз выполнены +60 \n
  Добавлена функциональность: открытие модального окна просмотра "кликнутой" картинки
  Первичный запрос данных( при открытии) происходит с помощью вычисления текущего месяца и запроса его в бд
  `
);
