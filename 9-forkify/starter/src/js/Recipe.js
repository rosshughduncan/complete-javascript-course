import axios from 'axios';

export default class Recipe {
  constructor(id) {
    this.id = id;
  }

  async getRecipe() {
    try {
      const res = await axios(`https://forkify-api.herokuapp.com/api/get?rId=${this.id}`);
      // extra data from object returned by the api
      this.title = res.data.recipe.title;
      this.author = res.data.recipe.publisher;
      this.img = res.data.recipe.image;
      this.url = res.data.recipe.source_url;
      this.ingredients = res.data.recipe.ingredients;
    } catch (error) {
      console.log(error);
      alert('Something went wrong!');
    }
  }

  calcTime() {
    // assuming we need 15 min for 3 ingredients
    const numIng = this.ingredients.length;
    const periods = Math.ceil(numIng / 3);
    this.time = periods * 15;
  }

  calcServings() {
    this.servings = 4;
  }

  parseIngredients() {
    // replace long version of quantity with short version
    // different spellings come from the api
    // must find plural version first so we don't get ozs or tsps
    const unitsLong = ['tablespoons', 'tablespoon', 'ounces', 'ounce', 'teaspoons', 'teaspoon', 'cups', 'pounds'];
    const unitsShort = ['tbsp', 'tbsp', 'oz', 'oz', 'tsp', 'tsp', 'cup', 'pound'];

    const newIngredients = this.ingredients.map(el => {
      // uniform units
      let ingredient = el.toLowerCase();
      unitsLong.forEach((unit, i) => {
        ingredient = ingredient.replace(unit, unitsShort[i]);
      });
      // remove parentheses
      ingredient = ingredient.replace(/ *\([^)]*\) */g, ' ');
      // parse ingredients into count, unit and ingredient
      // convert ingredient into array
      const arrIng = ingredient.split(' ');
      // return true if the element is in the array
      const unitIndex = arrIng.findIndex(el2 => unitsShort.includes(el2));

      let objIng, firstEl = parseInt(arrIng[0], 10);
      // if there is a unit in the string
      if (unitIndex > -1) {

      } else if (unitIndex === -1) {
        // if there is no unit and no number in 1st position
        objIng = {
          count: 1,
          unit: '',
          ingredient // automatically assign ingredient
        }
      //} else if (parseInt(arrIng[0], 10)) {
      } else if (firstEl) {
        // if there is no unit but first element is a number
        objIng = {
          //count: parseInt(arrIng[0], 10)
          count: firstEl,
          unit: '',
          ingredient: arrIng.slice(1).join(' ') // store entire array except for the first element
        }
      }
      // return modified unit string into the map
      return objIng;
    });
    this.ingredients = newIngredients;
  }
}
