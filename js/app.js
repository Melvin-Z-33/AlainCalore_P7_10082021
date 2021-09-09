/* eslint-disable */
import * as searchGeneral from './search-general.js';
import * as comboBox from './combo-box.js';
import * as showcards from './show-cards.js';
import * as searchtest from './searchtest.js';

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

searchGeneral.searchRecipes();

//SEARCH WITH INPUT GENERAL
headerInput.addEventListener('input', (e) => {
	searchTerm = e.target.value;
	searchGeneral.searchRecipes();
});

showcards.showAllIngredients();

//SELECT BOX INGREDIENT
comboBox.inputIngredient.onfocus = () => {
	comboBox.toSelectIngredient();
	comboBox.inputIngredient.onblur = () => {
		comboBox.inputIngredient.value = 'Ingredient';
	};
};


window.onload = () =>{
	sessionStorage.clear();
}
// input.onfocus = function () {
// 	//dataList.style.display = 'block';
// 	comboIngredient.style.display = 'block';
// 	input.style.borderRadius = "5px 5px 0 0";
// };
// //for (let option of dataList.options) {
// for (let option of comboIngredient.options) {
// 	option.onclick = function () {
// 	input.value = option.value;
// 	browsers.style.display = 'none';
// 	input.style.borderRadius = "5px";
// 	}
// };

// //COMBO-BOX addenventlistener
// 	let chevron = document.getElementById('arrow')

// 	document.querySelectorAll('.select__input')
// 	.forEach((el) => {
// 		el.addEventListener('click', () =>
// 		{
// 				if (el.parentNode.ariaExpanded === "true"){
// 					chevron.classList.add('reverse-chevron');
// 					el.childNodes[2].placeholder = 'Recherche un ingrédient';

// 			el.childNodes[2].style.width = "680px";
// 			el.style.width = "680px";

// 				}else if (el.parentNode.ariaExpanded === "false"){
// 					chevron.classList.remove('reverse-chevron');
// 					el.childNodes[2].placeholder = 'Ingrédient';
// 					el.childNodes[2].style.width = "169px";
// 					el.style.width = "169px";
// 				}
// 		})
// 	})
//};
