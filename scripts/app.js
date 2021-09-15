/* eslint-disable */
import * as comboBox from './combo-box.js';
import * as showcards from './show-cards.js';
import * as searchGeneral from './search-general.js';
import * as searchFilters from './search-filters.js';

export const headerInput = document.getElementById('header__input');
export const searchInput = document.getElementById('search');
export const results = document.getElementById('result-cards');
export const input = document.getElementById('box_ingredients');
export let bookOfRecipes;
export let searchTerm = '';
export let arrayForIngredients = [];
export let arrayDeleteElementDuplicate = [];

//JSON REQUEST
export const fetchRecipes = async () => {
	return (bookOfRecipes = await fetch('./recipes.json').then((res) => res.json()));
};

searchGeneral.searchGeneral();

//SEARCH WITH INPUT GENERAL
headerInput.addEventListener('input', (e) => {
	searchTerm = e.target.value;
	searchGeneral.searchGeneral();
});

//comboBox.inputIngredient.placeholder = 'Ingrédients';
//showcards.showAllIngredients();

//SELECT BOX INGREDIENT
comboBox.inputIngredient.onfocus = async () => {
	let allIngredientsFilters;
	console.log(allIngredientsFilters);
	let ingredientToSelect =  document.querySelectorAll('.combobox-ingredient');
	comboBox.toSelectFilter(ingredientToSelect, "bg-primary",allIngredientsFilters, 'storageIngredientFilters',"element-selected-ingredient");
};

comboBox.inputAppliance.onfocus = async () => {
	let allApplianceFilters;
	let applianceToSelect = document.querySelectorAll('.combobox-appareil');
	comboBox.toSelectFilter(applianceToSelect, "bg-success",allApplianceFilters, 'storageApplianceFilters',"element-selected-appliance");
}

comboBox.inputUstensils.onfocus = async () => {
	let allUstensilsFilters;
	let ustensilToSelect =  document.querySelectorAll('.combobox-ustensile');
		comboBox.toSelectFilter(ustensilToSelect, "bg-danger",allUstensilsFilters, 'storageUstensilsFilters',"element-selected-ustensile");
	}


window.onload = () =>{
	sessionStorage.clear();

}






