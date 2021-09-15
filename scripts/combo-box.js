import * as searchGeneral from './search-general.js';
import * as app from './app.js';
import * as showcards from './show-cards.js';
import * as searchFilters from './search-filters.js';


export const inputIngredient = document.getElementById('box_ingredients');
export const inputAppliance = document.getElementById('box_appliance');
export const inputUstensils = document.getElementById('box_ustensiles');
export const pannelIngredients = document.getElementById('ingredient');
export const pannelAppliances = document.getElementById('appareil');
export const pannelUstensils = document.getElementById('ustensile');
export const chevron = document.getElementById('arrow')
export const selectBox = document.querySelectorAll('.select')
export let allElementsLi;





const filterArray = (Arr, Input) => {
	return Arr.filter(e => e.toLowerCase().includes(Input.toLowerCase()))
}


const showAutocompletion = (array, pannel) => {
	pannel.innerHTML =' '
	array.map((element) =>pannel.insertAdjacentHTML(
	'beforeend',
	`<option class="col-4 combobox-ingredient" value="${element}" >${element}</option>`,
	),
	)
};



export const showPannel = (e) => {
	let myDatalist= e.target.parentNode.parentNode.nextElementSibling;

	//Display Pannel
	myDatalist.classList.toggle('show');
	myDatalist.classList.toggle('unshow');

	if (myDatalist.classList.contains('show')){
		e.target.placeholder = `'Recherche un ${myDatalist.id}'`;
		e.target.nextElementSibling.classList.toggle('reverse-chevron');
		e.path[1].style.width = "370px";
		e.target.classList.add("opacity")


	//Autocompletion
	e.target.addEventListener('input', (e) => {
		let table=" ";
		let term = e.target.value;

		switch (myDatalist.id) {
			case "ingredient":
			table = filterArray(showcards.totalofIngredients, term);
			showAutocompletion(table,myDatalist);
			break;
			case "appareil":
			table = filterArray(showcards.totalofAppliances, term);
				showAutocompletion(table,myDatalist);
			break;
			case "ustensile":
			table = filterArray(showcards.totalofUstensils, term);
				showAutocompletion(table,myDatalist);
			break;
			default:
			console.log("renard");
			break;
		}

	});

	}else if (!e.target.classList.contains('show')) {
		e.target.placeholder = `${myDatalist.id}`;
		e.target.nextElementSibling.classList.toggle('reverse-chevron')
		e.path[1].style.width = "170px";
		e.target.classList.remove("opacity");
	}

};
inputIngredient.addEventListener('click', showPannel);
inputAppliance.addEventListener('click', showPannel);
inputUstensils.addEventListener('click', showPannel);








// export const searchIngredients = async (li) => {

// 	await app.fetchRecipes();
// 	let displayArrayfromIngredients = [];

// 	for (let objet of app.bookOfRecipes.recipes) {
// 		for (let ingredient of objet.ingredients) {
// 			if (ingredient.ingredient === li) {
// 				displayArrayfromIngredients.push(objet);
// 			}
// 		}
// 	}
// 	showcard.displayCards(displayArrayfromIngredients);
// };



//FILTER MANAGEMENT
export const toSelectFilter =  (filters, color, arrayFilter, placeStorage,placeForFilter, inputBox) => {


	let allElementsLi = [];
	let filterSelectioned = [];

	for  (let option of filters) {
		
		option.onclick = function () {
			//Creation element Li
			let newLi = document.createElement('li');
			let newContentForLi = document.createTextNode(option.value);
			newLi.appendChild(newContentForLi);
			newLi.insertAdjacentHTML('beforeend', '<i class="far fa-times-circle"></i>');
			newLi.classList.add(color);
			newLi.classList.add("filter");
			let currentLi = document.getElementById(placeForFilter);
			currentLi.insertAdjacentElement('beforeend', newLi);
			allElementsLi = document.querySelectorAll('li');

			//Sort with Li created
			if (arrayFilter == null || arrayFilter == undefined) {
				filterSelectioned.push(option.text.toLowerCase());
				sessionStorage.setItem(placeStorage, JSON.stringify(filterSelectioned));
				searchFilters.searchWithFilter(filterSelectioned, inputBox);
				arrayFilter = JSON.parse(sessionStorage.getItem(placeStorage));
			} else {
				arrayFilter.push(option.text.toLowerCase());
				searchFilters.searchWithFilter(arrayFilter, inputBox);
				sessionStorage.setItem(placeStorage, JSON.stringify(arrayFilter));
			}

			//Sort with Li deleted
			allElementsLi.forEach((elementLi) => {
				elementLi.addEventListener('click', () => {

					if (arrayFilter.length === 0){
						searchGeneral.searchGeneral();
					} else if (arrayFilter.length > 0) {
						let positionLiDeleleted = arrayFilter.indexOf(elementLi.textContent.toLowerCase())
						arrayFilter.splice(positionLiDeleleted,1 );
						searchFilters.searchWithFilter(arrayFilter, inputBox);
						sessionStorage.setItem(placeStorage, JSON.stringify(arrayFilter));
						elementLi.remove();
							if (arrayFilter.length === 0){
								searchGeneral.searchGeneral();
								// showcards.showAllIngredients();
							console.log(arrayFilter)
							elementLi.remove();
							}
					}
				});
			});
		

		};
	}
};






