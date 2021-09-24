import * as searchGeneral from './search-general.js';
import * as showcards from './show-cards.js';
import * as searchFilters from './search-filters.js';
import * as app from './app.js';

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
	console.log(Input)
	return Arr.filter(e => e.toLowerCase().includes(Input.toLowerCase()))
}



const showAutocompletion = (array, pannel) => {
	pannel.innerHTML =' '
	array.map((element) =>pannel.insertAdjacentHTML(
	'beforeend',
	`<option class="col-4 combobox-${pannel.id}" value="${element}" >${element}</option>`,
	),
	)
	console.log(pannel)
	showcards.makeElementsLiClickable(pannel)
};



export const showPannel = (e) => {
	const myDatalist= e.target.parentNode.parentNode.nextElementSibling;
	const myDatalistName = myDatalist.getAttribute('data-selectbox');
	const roleComboBox = e.target.parentNode.parentNode
	//Display Pannel
	myDatalist.classList.toggle('unshow');
	myDatalist.classList.toggle('show');



	if (myDatalist.classList.contains('show')){
		e.target.placeholder = `Recherche un ${myDatalist.id}`;
		e.target.nextElementSibling.classList.toggle('reverse-chevron');
		e.target.classList.remove("color1")
		e.target.classList.add("color2")
		roleComboBox.setAttribute("aria-expanded", "true");

			if (e.path){
				e.path[1].style.width = "667px";
			}else if (e.composedPath()){
				e.composedPath()[1].style.width = "667px";
			}


		// Autocompletion
		e.target.addEventListener('input', (e) => {
			let table=" ";
			const term = e.target.value;

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
				console.log("autocomplétion");
				break;
			}
		})
	} else if (myDatalist.classList.contains('unshow')) {
		e.target.placeholder = `${myDatalistName}`;
		e.target.nextElementSibling.classList.toggle('reverse-chevron')
		e.target.classList.remove("color2");
		e.target.classList.add("color1")
		roleComboBox.setAttribute("aria-expanded", "false");

			if (e.path){
				e.path[1].style.width = "170px";
			}else if (e.composedPath()){
				e.composedPath()[1].style.width = "170px";
			}
	}
}


inputIngredient.addEventListener('click', showPannel);
inputAppliance.addEventListener('click', showPannel);
inputUstensils.addEventListener('click', showPannel);



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
			document.querySelector('main').classList.remove('margin-comboBox-normal');
			document.querySelector('main').classList.add('margin-comboBox-top');
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
				elementLi.addEventListener('click', async () => {


					await app.fetchRecipes();

					if (arrayFilter.length === 0){
						searchGeneral.searchGeneral();
						document.querySelector('main').classList.remove('margin-comboBox-top');
						document.querySelector('main').classList.add('margin-comboBox-normal');
					} else if (arrayFilter.length > 0) {
						let positionLiDeleleted = arrayFilter.indexOf(elementLi.textContent.toLowerCase())
						arrayFilter.splice(positionLiDeleleted,1 );
						searchFilters.searchWithFilter(arrayFilter, inputBox);
						sessionStorage.setItem(placeStorage, JSON.stringify(arrayFilter));
						elementLi.remove();
							if (arrayFilter.length === 0){
								showcards.displayCards(app.bookOfRecipes.recipes)
								//searchGeneral.searchGeneral(app.bookOfRecipes.recipes,'');
								// showcards.showAllIngredients();
							elementLi.remove();
							document.querySelector('main').classList.remove('margin-comboBox-top');
							document.querySelector('main').classList.add('margin-comboBox-normal');
							}
					}
				});
			});

		};
	}
};






