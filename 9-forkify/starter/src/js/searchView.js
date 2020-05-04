import { elements } from './base';

// automatically returns value (implicit return)
export const getInput = () => elements.searchInput.value;

// clears input of search box when we do a new search
export const clearInput = () => {
  // no implicit return
  elements.searchInput.value = '';
};

export const clearResults = () => {
  // clear all HTML elements in the results panel
  elements.searchResList.innerHTML = '';
  elements.searchResPages.innerHTML = '';
};

/* pasta with tomato and spinach
acc: 0    acc + cur.length = 5    newTitle = ['Pasta']
next iteration:
acc: 5    acc + cur.length = 9    newTitle = ['Pasta,', 'with']
next:
acc: 9    acc + cur.length = 15    newTitle = ['Pasta,', 'with', 'tomato']
*/

const limitRecipeTitle = (title, limit = 17) => {
  // adding values to an empty array is not mutating the variable
  const newTitle = [];
  if (title.length > limit) {
    // reduce method has accumulator built-in
    title.split(' ').reduce((acc, cur) => {
      if (acc + cur.length < limit) {
        newTitle.push(cur);
      }
      return acc + cur.length;
    }, 0);
    // return the result
    return `${newTitle.join(' ')} ...`;
  }
  return title;
};

// receives one recipe
// private function, no need to export
const renderRecipe = recipe => {
  const markup = `
    <li>
        <a class="results__link" href="#${recipe.recipe_id}">
            <figure class="results__fig">
                <img src="${recipe.image_url}" alt="${recipe.title}">
            </figure>
            <div class="results__data">
                <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
                <p class="results__author">${recipe.publisher}</p>
            </div>
        </a>
    </li>
  `;
  elements.searchResList.insertAdjacentHTML('beforeend', markup);
};

// button type: 'prev' or 'next'
const createButton = (page, type) => `
  <button class="btn-inline results__btn--${type}" data-goto=${type === 'prev' ? page - 1 : page + 1}>
      <svg class="search__icon">
          <use href="img/icons.svg#icon-triangle-${type === 'prev' ? 'left' : 'right'}"></use>
      </svg>
      <span>Page ${type === 'prev' ? page - 1 : page + 1}</span>
  </button>
`

const renderButtons = (page, numResults, resPerPage) => {
  const pages = Math.ceil(numResults / resPerPage);
  let button;
  if (page === 1 && pages > 1) {
    // only button to go to next page
    button = createButton(page, 'next');
  } else if (page < pages) {
    // both buttons
    button = `
      ${createButton(page, 'prev')}
      ${createButton(page, 'next')}
    `;
  } else if (page === pages && pages > 1) {
    // on last page, only have button to go to previous page
    button = createButton(page, 'prev');
  }
  // insert element
  elements.searchResPages.insertAdjacentHTML('afterbegin', button);
};

export const renderResults = (recipes, page = 1, resPerPage = 10) => {
  // store number of results per page
  const start = (page - 1) * resPerPage;
  const end = page * resPerPage;
  // loop through array of recipes to display to the interface
  recipes.slice(start, end).forEach(renderRecipe);
  // render pagination buttons
  renderButtons(page, recipes.length, resPerPage);
};
