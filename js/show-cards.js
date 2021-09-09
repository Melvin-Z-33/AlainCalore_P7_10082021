import * as app from './app.js';
import * as comboBox from './combo-box.js';
export let aarrayOfObjetsFromSelection = [];

export const displayCards = (arrayOfRecipe) => {
	app.results.innerHTML = '';

	let arrayOfIngredients = '';
	let totalofIngredients = [];
	let count = 1;

	comboBox.pannelIngredients.innerHTML = '';

	for (let objet of arrayOfRecipe) {
		for (let ingredient of objet.ingredients) {
			if (
				ingredient.hasOwnProperty('ingredient') &&
				ingredient.hasOwnProperty('quantity') &&
				ingredient.hasOwnProperty('unit')
			) {
				arrayOfIngredients += `<p><span class="lato-bold">${ingredient.ingredient}</span> : ${ingredient.quantity} ${ingredient.unit}</p> `;
			} else if (
				ingredient.hasOwnProperty('ingredient') &&
				ingredient.hasOwnProperty('quantity')
			) {
				arrayOfIngredients += `<p><span class="lato-bold">${ingredient.ingredient}</span> : ${ingredient.quantity} </p> `;
			} else if (ingredient.hasOwnProperty('ingredient')) {
				arrayOfIngredients += `<p><span class="lato-bold">${ingredient.ingredient}</span>  </p> `;
			}
			totalofIngredients.push(ingredient.ingredient);
		}

		let htmlforCards = `
    <div class="card  col-sm-12 col-md-3 mx-4 ">
      <img class="" alt="" src="http://via.placeholder.com/10">
      <div class="card-body container">
          <div class="row justify-content-between">
              <h2  class="card-title lato-bold text-hidden col-8">${objet.name}</h2>
              <p class="card-timer lato-bold col-4 text-end"><i class="far fa-clock"></i> ${objet.time} min</p>
              <div class="card-ingredient  col-6">${arrayOfIngredients}</div>
              <div class="card-text   col-6 text-start ">
                  <p class=" description lato-regular ">${objet.description}</p>
              </div>
          </div>
      </div>
    </div>
        `;
		document.querySelector('#result-cards').insertAdjacentHTML('beforeend', htmlforCards);

		arrayOfIngredients = '';

		count++;
	}

	totalofIngredients.map((recipe) =>
		comboBox.pannelIngredients.insertAdjacentHTML(
			'beforeend',
			`<option class="col-4 combobox-ingredient" value="${recipe}"  >${recipe}</option>`,
		),
	);
};

export const showAllIngredients = async () => {
	await app.fetchRecipes();

	let arrayDeleteElementDuplicate = [];
	let arrayForIngredients = [];

	for (let recipe of app.bookOfRecipes.recipes) {
		for (let ingredient of recipe.ingredients) {
			arrayForIngredients.push(ingredient.ingredient);
		}
		arrayDeleteElementDuplicate = [...new Set(arrayForIngredients)];
	}

	arrayDeleteElementDuplicate.map((recipe) =>
		comboBox.pannelIngredients.insertAdjacentHTML(
			'beforeend',
			`<option class="col-4 combobox-ingredient" value="${recipe}" >${recipe}</option>`,
		),
	);
};
