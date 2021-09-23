import * as app from './app.js';
import * as showcards from './show-cards.js';




export const searchGeneral =  (array, searchTerm) =>{

	let recipesFound=[];
	
	   let indiceDroite = array.length -1;
		console.log("length" + array)
	let indiceGauche = 0;
	let indiceMilieu;
	let arraySortByOrder;


	const sortArray =   (x,y) => {
		if (x.name < y.name) {return -1;}
		if (x.name > y.name) {return 1;}
	};
	arraySortByOrder = array.sort(sortArray);



	while ( indiceGauche <= indiceDroite){

		
		indiceMilieu =  Math.round((indiceGauche + indiceDroite) / 2);
		let b = array[indiceMilieu].name.toLowerCase().indexOf(searchTerm.toLowerCase());


		if ( b >= 0)  {									//if the element is found
			recipesFound.push(array[indiceMilieu]);

			if (array[indiceMilieu -1] !== undefined) {

				if (array[indiceMilieu-1].name.toLowerCase().includes(searchTerm.toLowerCase())) {
					//search in the left remaining array
					for (let i = indiceMilieu -1; i > -1; i--) {
						if (array[i].name.toLowerCase().includes(searchTerm.toLowerCase())) {
							recipesFound.push(array[i]);
						} else {
							console.log("e");
						}
					}
				}
			}
			if (array[indiceMilieu+1] !== undefined) {
				console.log("part en avant");
				if (array[indiceMilieu+1].name.toLowerCase().includes(searchTerm.toLowerCase())) {
					//search in the right remaining array
					for (let i = indiceMilieu+1; i < array.length; i++) {
						console.warn("2nd recherche" + " " + array[i].name );
						if (array[i].name.toLowerCase().includes(searchTerm.toLowerCase())) {
							recipesFound.push(array[i]);
						} else {
							console.log("stop");
						}
					}
				}
			}
			console.log(recipesFound);
			return recipesFound;

		} else  {								//if the element is not found
			let a = new Intl.Collator("fr", {sensitivity: "base"}).compare(array[indiceMilieu].name,searchTerm );
			if  (a === 0){
				recipesFound.push(array[indiceMilieu]);
				return "finish";
			} else if ( a  > 0){  //search in the right remaining array
				indiceDroite = indiceMilieu -1;
			} else if (a < 0) { //search in the left remaining array
				indiceGauche = indiceMilieu +1;
			} else{
				console.log("il n'y a pas d 'de recettes");
			}
		}
	}

	return recipesFound;

};









// SEQUENTIEL / DICHOTOMIQUE

//?  CODE QUI MARCHE
	// if (app.searchTerm.length === 0) {
	// 	showcards.displayCards(app.bookOfRecipes.recipes);

	// } else if (app.searchTerm.length >= 3) {

		// app.bookOfRecipes.recipes
		// .filter((recipe) => {

		// 	for (let element of recipe.ingredients) {
		// 		if (element.ingredient.toLowerCase().includes(app.searchTerm.toLowerCase())){
		// 			data.push(recipe);
		// 		}
		// 	}

		// 	if (recipe.name.toLowerCase().includes(app.searchTerm.toLowerCase())){
		// 		data.push(recipe);
		// 	} else if (recipe.description.toLowerCase().includes(app.searchTerm.toLowerCase())){
		// 	data.push(recipe);
		// 	}
		// });
		
	// 	 }
	// 	arrayDeleteElementDuplicate = [...new Set(data)];
	// 	showcards.displayCards(arrayDeleteElementDuplicate);