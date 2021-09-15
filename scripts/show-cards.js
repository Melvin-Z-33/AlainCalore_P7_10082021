import * as app from './app.js';
import * as comboBox from './combo-box.js';


const results = document.getElementById('result-cards');
const pannelIngredients = document.getElementById('ingredient');
const pannelAppliances = document.getElementById('appareil');
const pannelUstensils = document.getElementById('ustensile');
export let totalofIngredients = [];
export let totalofAppliances = [];
export let totalofUstensils = [];

const showFilter = (array ,selectbox) => {
	array.map(
		(recipe) => selectbox
			.insertAdjacentHTML(
				'beforeend',`<option class="col-4 combobox-${selectbox.id}" value="${recipe}" >${recipe}</option>`,
			),
	)
}


export const displayCards =  (arrayOfRecipe) => {

	let ingredientsForCard =''
	let arrayOfIngredients = [];
	let arrayOfAppliances = [];
	let arrayOfUstensils = [];


	results.innerHTML = '';
	pannelIngredients.innerHTML = '';
	pannelAppliances.innerHTML = '';
	pannelUstensils.innerHTML = '';

	for (let objet of arrayOfRecipe) {

		//FETCH DATA FROM INGREDIENTS
		for (let ingredient of objet.ingredients) {
			if (
				ingredient.hasOwnProperty('ingredient') &&
				ingredient.hasOwnProperty('quantity') &&
				ingredient.hasOwnProperty('unit')
			) {
				ingredientsForCard += `<p><span class="lato-bold">${ingredient.ingredient}</span> : ${ingredient.quantity} ${ingredient.unit}</p> `;
			} else if (
				ingredient.hasOwnProperty('ingredient') &&
				ingredient.hasOwnProperty('quantity')
			) {
				ingredientsForCard += `<p><span class="lato-bold">${ingredient.ingredient}</span> : ${ingredient.quantity} </p> `;
			} else if (ingredient.hasOwnProperty('ingredient')) {
				ingredientsForCard += `<p><span class="lato-bold">${ingredient.ingredient}</span>  </p> `;
			}
			arrayOfIngredients.push(ingredient.ingredient);
		}

		//FETCH DATA FROM APPLIANCE
		arrayOfAppliances.push(objet.appliance)
		// FETCH DATTA FROM USTENSILES
		objet.ustensils.forEach((element) => arrayOfUstensils.push(element))

		let htmlforCards = `
			<div class="card  col-sm-12 col-md-3 mx-4 ">
			<img class="" alt="" src="http://via.placeholder.com/10">
			<div class="card-body container">
				<div class="row justify-content-between">
					<h2  class="card-title lato-bold text-hidden col-8">${objet.name}</h2>
					<p class="card-timer lato-bold col-4 text-end"><i class="far fa-clock"></i> ${objet.time} min</p>
					<div class="card-ingredient  col-6">${ingredientsForCard}</div>
					<div class="card-text   col-6 text-start ">
						<p class=" description lato-regular ">${objet.description}</p>
					</div>
				</div>
			</div>
			</div>
        `;
		document.querySelector('#result-cards').insertAdjacentHTML('beforeend', htmlforCards);

		ingredientsForCard = '';
	}
	totalofIngredients = [...new Set(arrayOfIngredients)]
	showFilter(totalofIngredients ,pannelIngredients)

	totalofAppliances = [...new Set(arrayOfAppliances)]
	showFilter(totalofAppliances ,pannelAppliances)

	totalofUstensils = [...new Set(arrayOfUstensils)]
	showFilter(totalofUstensils ,pannelUstensils)

	return  totalofIngredients, totalofAppliances, totalofUstensils;
};



