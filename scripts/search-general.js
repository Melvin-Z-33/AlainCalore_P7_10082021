import * as app from './app.js';
import * as showcards from './show-cards.js';

const results = document.getElementById('result-cards');

export const searchGeneral = async () => {
	let arrayDeleteElementDuplicate = [];
	let data = [];
	let element;

	await app.fetchRecipes();



	if (app.searchTerm.length === 0) {
		showcards.displayCards(app.bookOfRecipes.recipes);

	} else if (app.searchTerm.length >= 3) {

		app.bookOfRecipes.recipes
		.filter((recipe) => {

			for (element of recipe.ingredients) {
				if (element.ingredient.toLowerCase().includes(app.searchTerm.toLowerCase())){
					data.push(recipe);
				}
			}

			if (recipe["name"].toLowerCase().includes(app.searchTerm.toLowerCase())){
				data.push(recipe)
			} else if (recipe["description"].toLowerCase().includes(app.searchTerm.toLowerCase())){
			data.push(recipe);
			}
		})

		arrayDeleteElementDuplicate = [...new Set(data)];

		if  (arrayDeleteElementDuplicate.length == 0){
			results.innerHTML = '';
			results.insertAdjacentHTML('beforeend', `<div class="message-notfound lato-bold text-center">
			« Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson »...</div>`);
			}else{
		showcards.displayCards(arrayDeleteElementDuplicate);
			}
	};
};

