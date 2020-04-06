// Budget controller
var budgetController = (function() { // IIFE returns immediately

})(); // () means immediately executed

// UI controller
var uiController = (function() {

})();

// Global app controller
var controller = (function(budgetCtrl, uiCtrl) {
  var ctrlAddItem = function() {
    // Get input values

    // Add new item to budget controller

    // Add new item to UI

    // Calculate budget

    // Display budget
    console.log('test');
  }

  // Click event
  document.querySelector('.add__btn').addEventListener('click', ctrlAddItem); // No brackets after function as this is a callback

  // Register key press of enter to work anywhere in the document
  document.addEventListener('keypress', function(event) {
    // If enter key has been pressed
    // Some older browsers use the 'which' property
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });
})(budgetController, uiController); // Used inside this module with a private name - we don't need to do lots of name changes if say budget controller changes
