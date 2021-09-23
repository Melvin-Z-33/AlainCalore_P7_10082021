/* eslint-disable */
import * as searchGeneral from './search-general.js';
import * as showcards from './show-cards.js';

export const headerInput = document.getElementById('header__input');
export const searchInput = document.getElementById('search');
export const results = document.getElementById('result-cards');
export const input = document.getElementById('box_ingredients');
export let arrayForIngredients = [];
export let arrayDeleteElementDuplicate = [];
export let searchTerm = '';
export let bookOfRecipes;


//JSON REQUEST
export const fetchRecipes = async () => {
	return (bookOfRecipes = await fetch('./recipes.json').then((res) => res.json()));
};



//SEARCH WITH INPUT GENERAL
headerInput.addEventListener('input', async (e) => {
	let recipes
	let recipe
	await fetchRecipes();
	console.log(bookOfRecipes.recipes)

	searchTerm = e.target.value;

	if (searchTerm.length >= 3){
		searchGeneral.searchGeneral(bookOfRecipes.recipes, searchTerm);

		showcards.displayCards(searchGeneral.searchGeneral(bookOfRecipes.recipes, searchTerm));

	} else {
		showcards.displayCards(bookOfRecipes.recipes)
	}

});

window.onload = async  () =>{
await fetchRecipes();
showcards.displayCards(bookOfRecipes.recipes)
sessionStorage.clear();
}

		// ! TEST
		// console.log("go")
		// for (recipes of bookOfRecipes.recipes){
		// 	console.log(recipes)
		// 	for (ingredient of recipes.ingredients) {
		// 		ingredients.sort((a, b) => a.localeCompare(b))
		// 		let test=[];


		// 		*** */ 
		// 		console.log(ingredient)
			
				
						// 	if (element.ingredient.toLowerCase().includes(app.searchTerm.toLowerCase())){
						// 		data.push(recipe)
						// 	}
						// }
			
						// if (recipe["name"].toLowerCase().includes(app.searchTerm.toLowerCase())){
						// 	data.push(recipe)
						// } else if (recipe["description"].toLowerCase().includes(app.searchTerm.toLowerCase())){
						// data.push(recipe)
						// }
				
				



			// ! FIN DE TEST

		// 	}
		// }
	






