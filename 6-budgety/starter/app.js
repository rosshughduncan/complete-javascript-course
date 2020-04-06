// Budget controller
var budgetController = (function() { // IIFE returns immediately
  // Custom data types for incomes and expenses
  // Constructor
  // Private functions
  var Expense = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };
  var Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };
  // Data structure for all variables
  var data = {
    allItems: {
      exp: [],
      inc: [],
    },
    totals: {
      exp: 0,
      inc: 0,
    }
  };
  return {
    addItem: function(type, des, val) {
      // Adding a new expense
      var newItem, id;

      // Select last item and create new ID
      if (data.allItems[type].length > 0) {
        // This prevents multiple IDs of the same number
        // Should be: ID = last ID + 1
        id = data.allItems[type][data.allItems[type].length - 1].id + 1; // + 1 sets the id for the new item
      }
      else {
        // When array is empty, new item should be 0
        id = 0;
      }

      // Create new item based on 'inc' or 'exp' type
      // If the new entry is an expense
      if (type === 'exp') {
        newItem = new Expense(id, des, val);
      }
      // If the new entry is an income
      else if (type === 'inc') {
        newItem = new Income(id, des, val);
      }

      // Push into data structure
      // No need to use if/else to decide which array to push to, since the names of the type and array are the same
      data.allItems[type].push(newItem);

      // Return the new item to the controller
      return newItem;
    },

    testing: function() {
      console.log(data);
    }
  };
})(); // () means immediately executed

// UI controller
var uiController = (function() {
  // Store all class strings here, so they don't have to be repeated, or in case they get changed in index
  // Private object
  var domStrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn',
    incomeContainer: '.income__list',
    expensesContainer: '.expenses__list'
  };
  // Public methods
  return {
    getInput: function() {
      // Returning an object with the 3 properties
      return {
        // Value of the type (inc or exp, + or -)
        type: document.querySelector(domStrings.inputType).value,
        // Entry description
        description: document.querySelector(domStrings.inputDescription).value,
        // Value of the entry
        value: document.querySelector(domStrings.inputValue).value
      }
    },

    getDOMStrings: function() { //passing our DOM strings into another function
      return domStrings;
    },

    addListItem: function(obj, type) {
      var html, newHTML, element;
      // Create HTML string w/ placeholder text
      if (type === 'inc') {
          element = domStrings.incomeContainer;
          // Insert placeholders
          html = '<div class="item clearfix" id="income-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>';
      }
      else if (type === 'exp') {
          element = domStrings.expensesContainer;
          html = '<div class="item clearfix" id="expense-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__percentage">21%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>';
      }
      // Replace placeholder text with some actual data
      // replace is a string function
      newHTML = html.replace('%id%', obj.id);
      newHTML = newHTML.replace('%description%', obj.description);
      newHTML = newHTML.replace('%value%', obj.value);
      // Insert HTML into DOM
      document.querySelector(element).insertAdjacentHTML('beforeend', newHTML);
    },

    clearFields: function() {
      var fields, fieldsArr; // Holds result of our selection
      // Syntax means class names are separated with a comma
      fields = document.querySelectorAll(domStrings.inputDescription + ', ' + domStrings.inputValue); //This returns a list, we need to convert the list to an array using slice (returns copy of array)
      // Function constructor for arrays
      fieldsArr = Array.prototype.slice.call(fields); // Makes slice method think that we're passing in an array, so it returns an array
      // Performs callback function on each element in the array
      fieldsArr.forEach(function(current, index, array) {
        // Clear fields
        current.value = '';
      });
      fieldsArr[0].focus(); // Sets the default field to the description box
    }
  }
})();

// Global app controller,, where we tell other modules how to behave, methods called here
var controller = (function(budgetCtrl, uiCtrl) {
  var setupEventListeners = function() {
    // Click event
    document.querySelector(dom.inputBtn).addEventListener('click', ctrlAddItem); // No brackets after function as this is a callback
    // Register key press of enter to work anywhere in the document
    document.addEventListener('keypress', function(event) {
      // If enter key has been pressed
      // Some older browsers use the 'which' property
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  };

  var dom = uiCtrl.getDOMStrings(); // Making a reference to DOM strings method in UI controller

  var ctrlAddItem = function() {
    var input, newItem;
    // Get input values
    input = uiCtrl.getInput(); // Public method which we have access to
    // Add new item to budget controller
    newItem = budgetCtrl.addItem(input.type, input.description, input.value);
    // Add new item to UI
    uiCtrl.addListItem(newItem, input.type);
    // Clear fields
    uiCtrl.clearFields();
    // Calculate budget

    // Display budget

  };

  return {
    // Initialise function
    init: function() {
      setupEventListeners();
    }
  };
})(budgetController, uiController); // Used inside this module with a private name - we don't need to do lots of name changes if say budget controller changes

// Lets the application run, without it, there are no event listeners
controller.init();
