var uiController = (() => {})();

var financeController = (() => {})();

var appController = ((uiController, financeController) => {
  var ctrlAddItem = () => {
    console.log("Дэлгэцээс өгөгдлөө авах хэсэг");
  };
  document.querySelector(".add__btn").addEventListener("click", () => {
    ctrlAddItem();
  });
  document.addEventListener("keypress", (event) => {
    if (event.key === "Enter" || event.which === 13) {
      ctrlAddItem();
    }
  });
})(uiController, financeController);
