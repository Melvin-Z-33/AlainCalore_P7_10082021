import * as app from './app.js';
import * as showcard from './show-cards.js';
import * as comboBox from './combo-box.js';



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
						console.log('ok');
						displayArrayfromIngredients.push(objet);
					}
				}
			}
			showcard.displayCards(displayArrayfromIngredients);
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
			break;
		case 3:
			alert("Vous ne pouvez selectionner que 2 ingrédients)")
			break;
		default:
			console.log(`Sorry, we are out of ${array.length}.`);
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
				break;
			case 3:
				alert("Vous ne pouvez selectionner que 2 appareil)")
				break;
			default:
				console.log(`le tableau n'est pas correct.`);
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
				break;
			case 3:
				alert("Vous ne pouvez selectionner que 2 ustensiles)")
				break;
			default:
				console.log(`désolé, veuillez reccomencez`);
		}

	}
};

