import * as app from './app.js';
import * as showcard from './show-cards.js';
import * as comboBox from './combo-box.js';



//* TEST RECHERCHE  AVEC LES FILTRES

export const searchWithFilter = async (array) => {
	await app.fetchRecipes();

	let displayArrayfromIngredients = [];
	let array1 = [];


	//!TEST!!!!!!!!!!!!!!!!!!!!!!!!!!
	
	
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


	// if (array.length === 1) {
	// 	for (let objet of app.bookOfRecipes.recipes) {
	// 		for (let ingredient of objet.ingredients) {
	// 			if (ingredient.ingredient.toLowerCase() === array[0].toLowerCase()) {
	// 				console.log('ok');
	// 				displayArrayfromIngredients.push(objet);
	// 			}
	// 		}
	// 	}
	// 	showcard.displayCards(displayArrayfromIngredients);
	// }
	// else if (array.length === 2) {
	// 	for (let objet of app.bookOfRecipes.recipes) {
	// 		for (let ingredient of objet.ingredients) {
	// 			if (
	// 				ingredient.hasOwnProperty('ingredient') &&
	// 				ingredient.ingredient.toLowerCase() === array[0].toLowerCase()
	// 			) {
	// 				array1.push(objet);
	// 			}
	// 		}
	// 	}
	// 	for (let objet of array1) {
	// 		for (let ingredient of objet.ingredients) {
	// 			if (
	// 				ingredient.hasOwnProperty('ingredient') &&
	// 				ingredient.ingredient.toLowerCase() === array[1].toLowerCase()
	// 			) {
	// 				displayArrayfromIngredients.push(objet);
	// 			}
	// 		}
	// 	}

	// 	showcard.displayCards(displayArrayfromIngredients);
	// } else if (array.length >= 3) {
	// 		alert("Vous ne pouvez selectionner que 2 ingrédients)")

	// }

	//! FIN DE TEST !!!!!!!!!!!!!!!!!!!!!!!!!!
};
