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

	await fetchRecipes();

	searchTerm = e.target.value;

	if (searchTerm.length >= 3){

		if(searchGeneral.searchGeneral(bookOfRecipes.recipes, searchTerm).length == 0){
			console.log("recipe not found")
		}else{
			showcards.displayCards(searchGeneral.searchGeneral(bookOfRecipes.recipes, searchTerm));
		}

	} else {
		showcards.displayCards(bookOfRecipes.recipes)
	}
});



window.onload = async  () =>{
	await fetchRecipes();
	showcards.displayCards(bookOfRecipes.recipes)
	sessionStorage.clear();
}








