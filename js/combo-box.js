import * as searchGeneral from './search-general.js';
import * as app from './app.js';
import * as showcards from './show-cards.js';
import * as searchtest from './searchtest.js';


export const inputIngredient = document.getElementById('box_ingredients');
export const pannelIngredients = document.getElementById('ing');
export const chevron = document.getElementById('arrow')
export let allElementsLi;
export let allIngredientsFilters;



const filterArray = (Arr, Input) => {
	return Arr.filter(e => e.toLowerCase().includes(Input.toLowerCase()))
}


const showAutocompletion = (array) => {

	pannelIngredients.innerHTML =' '
	array.map((element) =>pannelIngredients.insertAdjacentHTML(
	'beforeend',
	`<option class="col-4 combobox-ingredient" value="${element}" >${element}</option>`,
	),
	)
};



export const showPannelIngredients = (e) => {

	pannelIngredients.classList.toggle('show');
	pannelIngredients.classList.toggle('unshow');


	if (pannelIngredients.classList.contains('show')){
		inputIngredient.placeholder = 'Recherche un ingrédient';
		chevron.classList.toggle('reverse-chevron');
		e.path[1].style.width = "370px";
		inputIngredient.classList.add("opacity")

	inputIngredient.addEventListener('input', (e) => {
		let term = e.target.value;
		let data =filterArray(showcards.arrayDeleteElementDuplicate, term);
		showAutocompletion(data);
		}
	);

	}else if (!pannelIngredients.classList.contains('show')) {
		inputIngredient.placeholder = 'Ingrédients';
		chevron.classList.toggle('reverse-chevron')
		e.path[1].style.width = "170px";
		inputIngredient.classList.remove("opacity");
	}

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

	for (let option of ingredientToSelect) {
		option.onclick = function () {
			//Creation element Li
			let newLi = document.createElement('li');
			let newContentForLi = document.createTextNode(option.value);
			newLi.appendChild(newContentForLi);
			newLi.insertAdjacentHTML('beforeend', '<i class="far fa-times-circle"></i>');
			newLi.classList.add("bg-primary");
			let currentLi = document.getElementById('element-selected');
			currentLi.insertAdjacentElement('beforeend', newLi);
			allElementsLi = document.querySelectorAll('li');

			//Sort with Li created
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

					if (allIngredientsFilters.length === 0){
						searchGeneral.searchRecipes();
					} else if (allIngredientsFilters.length > 0) {
						let positionLiDeleleted = allIngredientsFilters.indexOf(el.textContent.toLowerCase())
						allIngredientsFilters.splice(positionLiDeleleted,1 );
						searchtest.searchTest(allIngredientsFilters);
						sessionStorage.setItem('storageIngredientFilters', JSON.stringify(allIngredientsFilters));
						el.remove();
							if (allIngredientsFilters.length === 0){
								searchGeneral.searchRecipes();
								showcards.showAllIngredients();
							console.log(allIngredientsFilters)
							el.remove();
							}
					}
				});
			});
		};
	}
};






