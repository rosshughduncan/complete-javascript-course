// Budget controller
var budgetController = (function() { // IIFE returns immediately
  // Custom data types for incomes and expenses
  // Constructor
  // Private functions
  var Expense = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
    this.percentage = -1; //undefined to start
  };

  Expense.prototype.calcPercentage = function(totalIncome) {
    if (totalIncome > 0) {
      this.percentage = Math.round((this.value / totalIncome) * 100);
    }
    else {
      this.percentage = -1;
    }
  };

  // This function has a different specific task to calcPercentage
  Expense.prototype.getPercentage = function() {
    return this.percentage;
  };

  var Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var calculateTotal = function(type) {
    var sum = 0;
    // loop through an array
    // select either exp or inc from data object
    data.allItems[type].forEach((cur) => {
      // cur refers to either exp or inc stored at the current position of the array
      sum += cur.value;
    });
    data.totals[type] = sum;
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
    },
    budget: 0,
    percentage: -1 // -1 to show if there a no budget values (hence no percentage)
  };

  // Public methods
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
    },

    calculateBudget: function() {
      // calculate total income & expenses
      calculateTotal('exp');
      calculateTotal('inc');
      // calculate budget: income - expenses
      data.budget = data.totals.inc - data.totals.exp;
      // calculate percentage of income that we spent
      // only display percentage if total income > 0
      if (data.totals.inc > 0) {
        data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100); // round to closest integer
      }
      else {
        data.percentage = -1; //otherwise, mark the percentage as non-existent
      }
    },

    calculatePercentages: function() {
      data.allItems.exp.forEach((current) => {
        current.calcPercentage(data.totals.inc);
      });

    },

    getPercentages: function() {
      var allPercentages = data.allItems.exp.map((current) => {
        return current.getPercentage();
      });
      return allPercentages;
    },

    getBudget: function() {
      return {
        budget: data.budget,
        totalInc: data.totals.inc,
        totalExp: data.totals.exp,
        percentage: data.percentage
      };
    },

    deleteItem: function(type, id) {
      var ids, index;
      //create array with all of the id numbers that we have
      // map receives a callback function with access to the array
      // map returns a new array
      ids = data.allItems[type].map(function(current) {
        return current.id;
      });
      // find the index that we need
      index = ids.indexOf(id); // index can be -1 if the item is not found in the array we're searching
      if (index !== -1) {
        // if we've found the element, delete it
        // splice method removes elements (slice creates a copy)
        //(start index, num elements to delete)
        data.allItems[type].splice(index, 1);
      }
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
    expensesContainer: '.expenses__list',
    budgetLabel: '.budget__value',
    incomeLabel: '.budget__income--value',
    expensesLabel: '.budget__expenses--value',
    percentageLabel: '.budget__expenses--percentage',
    container: '.container',
    expensesPercentageLabel: '.item__percentage'
  };

  var formatNumber = function(num, type) {
    var numSplit, int, dec;
    /* + or - before number
    exactly 2 decimal points
    comma separating thousands */
    // Absolute removes sign of number
    num = Math.abs(num);
    num = num.toFixed(2); // fixed number of 2 decimal places, method of the number prototype
    // This num is now a string
    numSplit = num.split('.'); // Stored in array
    int = numSplit[0];

    if (int.length > 3) { // more than 1000
      // substring allows us to return the part of the string that we want
      int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3);
    }

    dec = numSplit[1];

    ;
    return (type === 'exp' ? '-' : '+') + ' ' + int + '.' + dec;
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
        // convert the input into a float (it's string by default)
        value: parseFloat(document.querySelector(domStrings.inputValue).value)
      }
    },

    getDOMStrings: function() { //passing our DOM strings into another function
      return domStrings;
    },

    displayPercentages: function(percentages) {
      var fields = document.querySelectorAll(domStrings.expensesPercentageLabel); //returns a node list
      var nodeListForEach = function(list, callback) {
        for (var i = 0; i < list.length; i++) {
          callback(list[i], i);
        }
      };
      nodeListForEach(fields, function(current, index) {
        if (percentages[index] > 0) {
          current.textContent = percentages[index] + '%';
        }
        else {
          current.textContent = '--';
        }
      });
    },

    addListItem: function(obj, type) {
      var html, newHTML, element;
      // Create HTML string w/ placeholder text
      if (type === 'inc') {
          element = domStrings.incomeContainer;
          // Insert placeholders
          html = '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>';
      }
      else if (type === 'exp') {
          element = domStrings.expensesContainer;
          html = '<div class="item clearfix" id="exp-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__percentage">21%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>';
      }
      // Replace placeholder text with some actual data
      // replace is a string function
      newHTML = html.replace('%id%', obj.id);
      newHTML = newHTML.replace('%description%', obj.description);
      newHTML = newHTML.replace('%value%', formatNumber(obj.value, type)); // number is formatted and replaced in string
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
    },

    displayBudget: function(obj) {
      var type;
      obj.budget > 0 ? type = 'inc' : 'exp';
      document.querySelector(domStrings.budgetLabel).textContent = formatNumber(obj.budget, type);
      document.querySelector(domStrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');
      document.querySelector(domStrings.expensesLabel).textContent = formatNumber(obj.totalExp, 'exp');
      // only show percentage if there are incomes
      if (obj.percentage > 0) {
        document.querySelector(domStrings.percentageLabel).textContent = obj.percentage + '%';
      }
      else {
        document.querySelector(domStrings.percentageLabel).textContent = '--';
      }
    },

    deleteListItem: function(type, selectorID) { //we need a class name to select the element
      var element = document.getElementById(type + '-' + selectorID);
      element.parentNode.removeChild(element);
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
    document.querySelector(dom.container).addEventListener('click', ctrlDeleteItem); //add delete listener
  };

  var dom = uiCtrl.getDOMStrings(); // Making a reference to DOM strings method in UI controller

  var updateBudget = function() {
    // calculate budgetCtrl
    budgetCtrl.calculateBudget();
    // return the budget
    var budget = budgetCtrl.getBudget(); //budget stored in variable as an object
    // display budget on the ui
    uiCtrl.displayBudget(budget);
  };

  var updatePercentages = function() {
    // Calculate percentages
    budgetCtrl.calculatePercentages();
    // Read percentages from budget controller
    var percentages = budgetCtrl.getPercentages();
    // Update UI
    uiCtrl.displayPercentages(percentages);
  };

  var ctrlAddItem = function() {
    var input, newItem;
    // Get input values
    input = uiCtrl.getInput(); // Public method which we have access to
    // prevent inputs with no description or an invalid number in value
    // if we enter nothing, nothing happens
    if (input.description !== '' && !isNaN(input.value) && input.value > 0) {
      // Add new item to budget controller
      newItem = budgetCtrl.addItem(input.type, input.description, input.value);
      // Add new item to UI
      uiCtrl.addListItem(newItem, input.type);
      // Clear fields
      uiCtrl.clearFields();
      // Calculate and update budget
      updateBudget();
      // Calculate and update percentages
      updatePercentages();
    }
  };

  var ctrlDeleteItem = function(event) {
    var itemID, splitID, type, id;
    //accessing the id of the item in the list
    itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
    // dom structure will only return an item ID if we named it
    if (itemID) {
      //format: inc-0 or exp-0
      //strings are transformed from primatives to objects so we can use methods on them
      splitID = itemID.split('-'); //this returns an array in format ['inc', '0']
      type = splitID[0]; //type is first element (inc)
      //this returns a string by default
      id = parseInt(splitID[1]); //id is second element (e.g. 0)
      // Delete item from data structure
      budgetCtrl.deleteItem(type, id);
      // Delete item from UI
      uiCtrl.deleteListItem(type, id);
      // Update and show new budget
      updateBudget(); //this function has been re-used from earlier
      // Calculate and update percentages
      updatePercentages(); //same here
    }
  };

  return {
    // Initialise function
    init: function() {
      //set default values when the page loads
      uiCtrl.displayBudget({
        budget: 0,
        totalInc: 0,
        totalExp: 0,
        percentage: -1
      });
      setupEventListeners();
    }
  };
})(budgetController, uiController); // Used inside this module with a private name - we don't need to do lots of name changes if say budget controller changes

// Lets the application run, without it, there are no event listeners
controller.init();
