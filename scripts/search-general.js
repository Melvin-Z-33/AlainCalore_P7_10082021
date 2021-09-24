import * as app from './app.js';

const results = document.getElementById('result-cards');



export const searchGeneral =  (array, searchTerm) =>{

	let recipesFound=[];
	let indiceDroite = array.length -1;
	let indiceGauche = 0;
	let indiceMilieu;
	let arraySortByOrder;
	let arrayDeleteElementDuplicate;



	const sortArray =   (x,y) => {
		if (x.name < y.name) {return -1;}
		if (x.name > y.name) {return 1;}
	};
	arraySortByOrder = array.sort(sortArray);



	while ( indiceGauche <= indiceDroite){

		indiceMilieu =  Math.round((indiceGauche + indiceDroite) / 2);
		let matchArrayAndSearchTerm = array[indiceMilieu].name.toLowerCase().indexOf(searchTerm.toLowerCase());


		if (matchArrayAndSearchTerm  >= 0)  {									//if the element is found
			recipesFound.push(array[indiceMilieu]);

			if (array[indiceMilieu -1] !== undefined) {

				if (array[indiceMilieu-1].name.toLowerCase().includes(searchTerm.toLowerCase())) {
					//search in the left remaining array
					for (let i = indiceMilieu -1; i > -1; i--) {
						if (array[i].name.toLowerCase().includes(searchTerm.toLowerCase())) {
							recipesFound.push(array[i]);
						}
					}
				}
			}
			if (array[indiceMilieu+1] !== undefined) {

				if (array[indiceMilieu+1].name.toLowerCase().includes(searchTerm.toLowerCase())) {
					//search in the right remaining array
					for (let i = indiceMilieu+1; i < array.length; i++) {
						if (array[i].name.toLowerCase().includes(searchTerm.toLowerCase())) {
							recipesFound.push(array[i]);
						} else {
							console.log("stop");
						}
					}
				}
			}
			break;

		} else  {	//if the element is not found
			let matchSearchtermAndArray = new Intl.Collator("fr", {sensitivity: "base"}).compare(array[indiceMilieu].name,searchTerm );

			if ( matchSearchtermAndArray  > 0){  //search in the right remaining array
				indiceDroite = indiceMilieu -1;
			} else if (matchSearchtermAndArray < 0) { //search in the left remaining array
				indiceGauche = indiceMilieu +1;
			}

		}
	}

			if (searchTerm.length >= 3) {
				array.filter((recipe) => {

					for (let element of recipe.ingredients) {
						if (element.ingredient.toLowerCase().includes(searchTerm.toLowerCase())){
							recipesFound.push(recipe);
						} if (recipe.description.toLowerCase().includes(app.searchTerm.toLowerCase())){
							recipesFound.push(recipe);
						}
					}

					arrayDeleteElementDuplicate = [...new Set(recipesFound)];
				});
			}

			if  (arrayDeleteElementDuplicate.length == 0){
			results.innerHTML = '';
			results.insertAdjacentHTML('beforeend', `<div class="message-notfound lato-bold text-center">
			« Aucune recette ne correspond à votre critère… vous pouvezchercher « tarte aux pommes », « poisson »...</div>`);
			}

	return arrayDeleteElementDuplicate;

};



