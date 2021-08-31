/* eslint-disable */
import * as searchGeneral from './search-general.js';
import * as comboBox from './combo-box.js';
import * as showcards from './show-cards.js';



export const searchInput = document.getElementById('search');
export const results = document.getElementById('result-cards');
export const input = document.getElementById('box_ingredients');
export let bookOfRecipes;
export let searchTerm = '';
export let comboIngredient;
// let arrayDeleteElementDuplicate = [];

//JSON REQUEST
export const fetchRecipes = async () => {
	return bookOfRecipes = await fetch('./recipes.json').then((res) => res.json());
};


//** DROPDOWN */

//let ff = [];
//uniqueIngredient;



window.onload = () => {

	 comboIngredient = document.getElementById('ing');
//SEARCH WITH INPUT GENERAL
	searchInput.addEventListener('input', (e) => {
		searchTerm = e.target.value;
		searchGeneral.searchRecipes();
	});
	searchGeneral.searchRecipes();

	searchInput.addEventListener('input', (e) => {
		searchTerm = e.target.value;
    	comboBox.searchIngredients(searchTerm);
	});


//COMBO-BOX BUTTON
const ingredients = async () => {
	await fetchRecipes();
		// console.log(bookOfRecipes.recipes);

showcards.showAllIngredients()
//? TEST POUR CHOIX MULTIPLE:

};

// code qui fonctionne:
	// 	for (let recipe of bookOfRecipes.recipes) {
	// 		for (let ingredient of recipe.ingredients){
	// 			arrayForIngredients.push(ingredient.ingredient)
	// 		}
	// 		arrayDeleteElementDuplicate = [...new Set(arrayForIngredients)]
	// 	}
	// 	arrayDeleteElementDuplicate.map((recipe) => comboIngredient
	// 	.insertAdjacentHTML('beforeend', `<option class="col-4" value="${recipe}"  >${recipe}</option>`))
	// };


// let dataList = document.getElementById('ing');

const showOption = () =>{
	//dataList.style.display = "flex"
	comboIngredient.style.display = "flex"
	input.style.borderRadius = "5px 5px 0 0";


}

document.getElementById('box_ingredients').addEventListener('focus', showOption)

ingredients()



	input.onfocus = function () {
		//dataList.style.display = 'block';
		comboIngredient.style.display = 'block';
		input.style.borderRadius = "5px 5px 0 0";
	};
	//for (let option of dataList.options) {
	for (let option of comboIngredient.options) {
		option.onclick = function () {
		input.value = option.value;
		browsers.style.display = 'none';
		input.style.borderRadius = "5px";
		}
	};


//COMBO-BOX addenventlistener
	let chevron = document.getElementById('arrow')

	document.querySelectorAll('.select__input')
	.forEach((el) => {
		el.addEventListener('click', () =>
		{
				if (el.parentNode.ariaExpanded === "true"){
					chevron.classList.add('reverse-chevron');
					el.childNodes[2].placeholder = 'Recherche un ingrédient';

			el.childNodes[2].style.width = "680px";
			el.style.width = "680px";

				}else if (el.parentNode.ariaExpanded === "false"){
					chevron.classList.remove('reverse-chevron');
					el.childNodes[2].placeholder = 'Ingrédient';
					el.childNodes[2].style.width = "169px";
					el.style.width = "169px";
				}
		})
	})


}