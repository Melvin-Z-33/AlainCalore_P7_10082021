import * as searchGeneral from './search-general.js';
import * as app from './app.js';
import * as showcard from './show-cards.js';
import * as searchtest from './searchtest.js';


export const inputIngredient = document.getElementById('box_ingredients');
export const pannelIngredients = document.getElementById('ing');
export let allElementsLi;
export let allIngredientsFilters;

const showPannelIngredients = () => {
	pannelIngredients.classList.toggle('show');
	pannelIngredients.classList.toggle('unshow');
};
inputIngredient.addEventListener('click', showPannelIngredients);




export const searchIngredients = async (li) => {
	await app.fetchRecipes();

	let displayArrayfromIngredients = [];

	for (let objet of app.bookOfRecipes.recipes) {
		for (let ingredient of objet.ingredients) {
			if (ingredient.ingredient === li) {
				displayArrayfromIngredients.push(objet);
			}
		}
	}
	showcard.displayCards(displayArrayfromIngredients);
};




export const toSelectIngredient = () => {

	const ingredientToSelect = document.querySelectorAll('.combobox-ingredient');
	let allElementsLi = [];
	let ingredientFilter = [];

	inputIngredient.value = ' ';


	for (let option of ingredientToSelect) {

		option.onclick = function () {
			//Creation element Li
			inputIngredient.value = option.value;
			let newLi = document.createElement('li');
			let newContentForLi = document.createTextNode(option.value);
			newLi.appendChild(newContentForLi);
			newLi.insertAdjacentHTML('beforeend', '<i class="far fa-times-circle"></i>');
			let currentLi = document.getElementById('element-selected');
			currentLi.insertAdjacentElement('beforeend', newLi);
			allElementsLi = document.querySelectorAll('li');


			//Sort with  array of Li
			if (allIngredientsFilters == null || allIngredientsFilters == undefined) {
				ingredientFilter.push(option.text.toLowerCase());
				sessionStorage.setItem('storageIngredientFilters', JSON.stringify(ingredientFilter));
				searchtest.searchTest(ingredientFilter);
				allIngredientsFilters = JSON.parse(sessionStorage.getItem('storageIngredientFilters'));
			} else {
				allIngredientsFilters.push(option.text.toLowerCase());
				searchtest.searchTest(allIngredientsFilters);
				sessionStorage.setItem('storageIngredientFilters', JSON.stringify(allIngredientsFilters));
			}


			//Sort with Li deleted
			allElementsLi.forEach((el) => {
				el.addEventListener('click', () => {

					let positionLiDeleleted = allIngredientsFilters.indexOf(el.textContent.toLowerCase())
					allIngredientsFilters.splice(positionLiDeleleted,1 );
					searchtest.searchTest(allIngredientsFilters);
					sessionStorage.setItem('storageIngredientFilters', JSON.stringify(allIngredientsFilters));
					console.log(allIngredientsFilters)
					el.remove();
				});
			});
		};
	}
};


