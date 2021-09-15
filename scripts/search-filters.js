import * as app from './app.js';
import * as showcard from './show-cards.js';
import * as comboBox from './combo-box.js';



	//!Test
		const deleteElementInPanel = (comboBoxOptions) => {
				let allFilters = document.querySelectorAll(".filter")
				let elementSelectioned;
				allFilters.forEach(((element) => {
					let allOptions =  document.querySelectorAll(comboBoxOptions);

					for (elementSelectioned of allOptions) {
						if (element.textContent.toLowerCase() === elementSelectioned.textContent.toLowerCase()) {
							elementSelectioned.classList.add('unshow');
						}
					}
				}))
			}
			//! **** fin






//* RECHERCHE  AVEC LES FILTRES

export const searchWithFilter = async (array, inputBox) => {
	await app.fetchRecipes();

	let displayArrayfromIngredients = [];
	let array1 = [];


	if ( inputBox == comboBox.inputIngredient){
		//FILTER FOR INGREDIENT
		switch (array.length) {
		case 1:
			for (let objet of app.bookOfRecipes.recipes) {
				for (let ingredient of objet.ingredients) {
					if (ingredient.ingredient.toLowerCase() === array[0].toLowerCase()) {
						displayArrayfromIngredients.push(objet);
					}
				}
			}
			showcard.displayCards(displayArrayfromIngredients);
			deleteElementInPanel('.combobox-ingredient');
			break;
		case 2:
			for (let objet of app.bookOfRecipes.recipes) {
				for (let ingredient of objet.ingredients) {
					if (
						ingredient.hasOwnProperty('ingredient') &&
						ingredient.ingredient.toLowerCase() === array[0].toLowerCase()
					) {
						array1.push(objet);
					}
				}
			}
			for (let objet of array1) {
				for (let ingredient of objet.ingredients) {
					if (
						ingredient.hasOwnProperty('ingredient') &&
						ingredient.ingredient.toLowerCase() === array[1].toLowerCase()
					) {
						displayArrayfromIngredients.push(objet);
					}
				}
			}
			showcard.displayCards(displayArrayfromIngredients);
			deleteElementInPanel('.combobox-ingredient');
			break;
		case 3:
			alert("Vous ne pouvez selectionner que 2 ingrédients)")
			break;
		default:
			console.log(`veuillez sélectionner des filtres`);
		}

	} else if ( inputBox == comboBox.inputAppliance){
		//FILTER FOR APPLIANCE
		switch (array.length) {
			case 1:
				for (let objet of app.bookOfRecipes.recipes) {
					if (objet.appliance.toLowerCase() === array[0].toLowerCase()) {
						console.log('ok');
						displayArrayfromIngredients.push(objet);
					}
				}
				showcard.displayCards(displayArrayfromIngredients);
				deleteElementInPanel('.combobox-appareil');
				break;
			case 2:
				for (let objet of app.bookOfRecipes.recipes) {
					if (objet.appliance.toLowerCase() === array[0].toLowerCase()){
						array1.push(objet);
					}
				}
				for (let objet of array1) {
					console.log(array[1])
					if (objet.appliance.toLowerCase() === array[1].toLowerCase()) {
						displayArrayfromIngredients.push(objet);
					}
				}
				showcard.displayCards(displayArrayfromIngredients);
				deleteElementInPanel('.combobox-appareil');
				break;
			case 3:
				alert("Vous ne pouvez selectionner que 2 appareils)")
				break;
			default:
				console.log(`veuillez sélectionner des filtres`);
			}
	} else if ( inputBox == comboBox.inputUstensils){
		//FILTER FOR USTENSILS
		switch (array.length) {
			case 1:
				for (let objet of app.bookOfRecipes.recipes) {

					for (let ustensil of objet.ustensils) {
						if (ustensil.toLowerCase() === array[0].toLowerCase()) {
							displayArrayfromIngredients.push(objet);
						}
					}
				}
				showcard.displayCards(displayArrayfromIngredients);
				deleteElementInPanel('.combobox-ustensile');
				break;
			case 2:
				for (let objet of app.bookOfRecipes.recipes) {
					for (let ustensil of objet.ustensils) {
						if (ustensil.toLowerCase() === array[0].toLowerCase()){
							array1.push(objet);
						}
					}
				}
				for (let objet of array1) {
					for (let ustensil of objet.ustensils) {
						if ((ustensil.toLowerCase() === array[1].toLowerCase())) {
							displayArrayfromIngredients.push(objet);
						}
					}
				}
				showcard.displayCards(displayArrayfromIngredients);
				deleteElementInPanel('.combobox-ustensile');
				break;
			case 3:
				alert("Vous ne pouvez selectionner que 2 ustensiles)")
				break;
			default:
				console.log(`veuillez sélectionner des filtres`);
		}

	}
};


