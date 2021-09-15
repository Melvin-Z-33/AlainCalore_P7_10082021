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


let ingredientToSelect;
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


comboBox.inputIngredient.onclick =  () => {

	let storageIngredientFilters = JSON.parse(sessionStorage.getItem('stockIngredientFilters')); 
	let ingredientToSelect =  document.querySelectorAll('.combobox-ingredient');
	comboBox.toSelectFilter(ingredientToSelect, "bg-primary",storageIngredientFilters, 'stockIngredientFilters',"element-selected-ingredient",comboBox.inputIngredient);
}

comboBox.inputAppliance.onfocus = async () => {
	
	let storageApplianceFilters = JSON.parse(sessionStorage.getItem('stockApplianceFilters'));
	let applianceToSelect = document.querySelectorAll('.combobox-appareil');
	comboBox.toSelectFilter(applianceToSelect, "bg-success",storageApplianceFilters, 'stockApplianceFilters',"element-selected-appliance", comboBox.inputAppliance);
}

comboBox.inputUstensils.onfocus = async () => {
	
	let storageUstensilsFilters = JSON.parse(sessionStorage.getItem('stockUstensilFilters'));
	let ustensilToSelect =  document.querySelectorAll('.combobox-ustensile');
		comboBox.toSelectFilter(ustensilToSelect, "bg-danger",storageUstensilsFilters, 'stockUstensilFilters',"element-selected-ustensile",comboBox.inputUstensils);
	}






window.onload = () =>{
	sessionStorage.clear();



}






