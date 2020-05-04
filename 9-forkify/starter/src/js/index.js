import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements, renderLoader, clearLoader } from './views/base';
import Recipe from './models/Recipe';

/** global state of app
* - Search object
* - Current recipe object
* - Shopping list object
* - Liked recipes
*/
const state = {};

/**
 * Search controller
*/
const controlSearch = async () => {
  // get query from view
  //const query = searchView.getInput();
  const query = 'pizza';
  if (query) {
    // new search object and add to state
    state.search = new Search(query);
    // prepare ui for results
    searchView.clearInput();
    searchView.clearResults();
    renderLoader(elements.searchRes);
    try {
      // search for recipes
      await state.search.getResults(); // returns a promise, every asychronous function
                                        //automatically returns a promise
      // render results on ui
      clearLoader();
      searchView.renderResults(state.search.result);
    } catch (err) {
      alert('Something wrong with the search');
      clearLoader();
    }
  }
};

elements.searchForm.addEventListener('submit', e => {
  // prevent page from reloading when search is clicked
  e.preventDefault();
  controlSearch();
});

// testing
window.addEventListener('load', e => {
  // prevent page from reloading when search is clicked
  e.preventDefault();
  controlSearch();
});

elements.searchResPages.addEventListener('click', e => {
  const btn = e.target.closest('.btn-inline');
  if (btn) {
    // convert page target to number in base 10
    const goToPage = parseInt(btn.dataset.goto, 10);
    searchView.clearResults(); // clear results when we go to the next page
    searchView.renderResults(state.search.result, goToPage);
  }
});

/**
 * Search controller
*/
const controlRecipe = async () => {
  // use hash part of the page URL
  // replace hash with nothing
  const id = window.location.hash.replace('#', '');
  console.log(id);
  // only apply processing if there is an id in the URL
  if (id) {
    // prepare ui for changes

    // create new recipe object
    state.recipe = new Recipe(id);
    // *****TESTING******
    window.r = state.recipe;
    // promise may return an error from this point
    try {
      // get recipe data
      await state.recipe.getRecipe(); // wait for promise to return with values
      // calculate servings & time
      state.recipe.calcTime();
      state.recipe.calcServings();
      // render recipe
      console.log(state.recipe);
    } catch {
      alert('Error processing recipe');
    }
  }
};

// change current recipe based on the query string in the URL
// fire reload event listener
['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));
