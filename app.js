var uiController = (() => {
  var DOMstrings = {
    inputType: ".add__type",
    inputDescrition: ".add__description",
    inputValue: ".add__value",
    addBtn: ".add__btn",
  };

  return {
    getInput: () => {
      return {
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescrition).value,
        value: document.querySelector(DOMstrings.inputValue).value,
      };
    },

    getDomStrings: () => {
      return DOMstrings;
    },
  };
})();

var financeController = (() => {
  var Income = (id, description, value) => {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var Expense = (id, description, value) => {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var data = {
    allItems: {
      inc: [],
      exp: [],
    },
    
    totals: {
      inc: 0,
      exp: 0,
    },
  };
})();

var appController = ((uiController, financeController) => {
  var ctrlAddItem = () => {
    console.log(uiController.getInput());
  };

  var setupEventListeners = () => {
    var DOM = uiController.getDomStrings();

    document.querySelector(DOM.addBtn).addEventListener("click", () => {
      ctrlAddItem();
    });

    document.addEventListener("keypress", (event) => {
      if (event.key === "Enter" || event.which === 13) {
        ctrlAddItem();
      }
    });
  };

  return {
    init: () => {
      console.log("App started");
      setupEventListeners();
    },
  };
})(uiController, financeController);

appController.init();
