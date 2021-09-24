import * as app from './app.js';
import * as showcards from './show-cards.js';



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
		showcards.displayCards(arrayDeleteElementDuplicate);
	};
};

