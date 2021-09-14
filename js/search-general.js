import * as app from './app.js';
import * as showcards from './show-cards.js';


let arrayDeleteElementDuplicate = []
//SEARCH GENERAL
export const searchRecipes = async () => {
	await app.fetchRecipes();
	let element;
	let data = [];


	if (app.searchTerm.length === 0){
		showcards.displayCards(app.bookOfRecipes.recipes)

	} else if (app.searchTerm.length >= 3){

		app.bookOfRecipes.recipes
		.filter((recipe) => {

			for (element of recipe.ingredients) {
				if (element.ingredient.toLowerCase().includes(app.searchTerm.toLowerCase())){
					data.push(recipe)
				}
			}

			if (recipe["name"].toLowerCase().includes(app.searchTerm.toLowerCase())){
				data.push(recipe)
			} else if (recipe["description"].toLowerCase().includes(app.searchTerm.toLowerCase())){
			data.push(recipe)
			}
		})

		arrayDeleteElementDuplicate = [...new Set(data)];
		showcards.displayCards(arrayDeleteElementDuplicate)
	};
}




	//app.results.innerHTML = app.bookOfRecipes.recipes
// 		.filter((recipe) => recipe.name.toLowerCase().includes(app.searchTerm.toLowerCase()))
// 		.map((recipe) => {
// 			let arrayOfIngredients = '';
// 			for (element of recipe.ingredients) {
// 				if (
// 					element.hasOwnProperty('ingredient') &&
// 					element.hasOwnProperty('quantity') &&
// 					element.hasOwnProperty('unit')
// 				) {
// 					arrayOfIngredients += `<p><span class="lato-bold">${element.ingredient}</span> : ${element.quantity} ${element.unit}</p> `;
// 				} else if (
// 					element.hasOwnProperty('ingredient') &&
// 					element.hasOwnProperty('quantity')
// 				) {
// 					arrayOfIngredients += `<p><span class="lato-bold">${element.ingredient}</span> : ${element.quantity} </p> `;
// 				} else if (element.hasOwnProperty('ingredient')) {
// 					arrayOfIngredients += `<p><span class="lato-bold">${element.ingredient}</span>  </p> `;
// 				}
// 			}

// 			return `
// 			<div class="card  col-sm-12 col-md-3 mx-4 ">
// 					<img class="" alt="" src="http://via.placeholder.com/10">

// 				<div class="card-body container">
// 					<div class="row justify-content-between">
// 						<h2  class="card-title lato-bold text-hidden col-8">${recipe.name}</h2>
// 						<p class="card-timer lato-bold col-4 text-end"><i class="far fa-clock"></i> ${recipe.time} min</p>
// 						<div class="card-ingredient  col-6">${arrayOfIngredients}</div>
// 						<div class="card-text   col-6 text-start ">
// 							<p class=" description lato-regular ">${recipe.description}</p>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 				`;
// 		})
// 		.join('');
// };

//? UTILISER PLUSIER FOIS LA FONCTION FILTRE POUR  LES INGREDIENTS, LES APPAREILS, LES USTENSILES?



		// 	for (element in allValueinRecipe)
		// 	if(recipe["name"] === app.searchTerm ){
		// 		datax.push(recipe);
		// 		return datax;
		// 	 }
		// });
		
		

// app.bookOfRecipes.recipes.filter((recipe) =>{ 
// if (recipe.name.toLowerCase().includes(app.searchTerm.toLowerCase()) ){
// 	console.log(recipe)
	
// 	}
// }
// )


// arrayDeleteElementDuplicate.map((recipe) => {
// 	let arrayOfIngredients = '';
// 	for (element of recipe.ingredients) {
// 		if (
// 			element.hasOwnProperty('ingredient') &&
// 			element.hasOwnProperty('quantity') &&
// 			element.hasOwnProperty('unit')
// 		) {
// 			arrayOfIngredients += `<p><span class="lato-bold">${element.ingredient}</span> : ${element.quantity} ${element.unit}</p> `;
// 		} else if (
// 			element.hasOwnProperty('ingredient') &&
// 			element.hasOwnProperty('quantity')
// 		) {
// 			arrayOfIngredients += `<p><span class="lato-bold">${element.ingredient}</span> : ${element.quantity} </p> `;
// 		} else if (element.hasOwnProperty('ingredient')) {
// 			arrayOfIngredients += `<p><span class="lato-bold">${element.ingredient}</span>  </p> `;
// 		}
// 	}

// 	return `
// 	<div class="card  col-sm-12 col-md-3 mx-4 ">
// 			<img class="" alt="" src="http://via.placeholder.com/10">

// 		<div class="card-body container">
// 				<p class="card-timer lato-bold col-4 text-end"><i class="far fa-clock"></i> ${recipe.time} min</p>
// 			<div class="row justify-content-between">
// 				<h2  class="card-title lato-bold text-hidden col-8">${recipe.name}</h2>
// 				<div class="card-ingredient  col-6">${arrayOfIngredients}</div>
// 				<div class="card-text   col-6 text-start ">
// 					<p class=" description lato-regular ">${recipe.description}</p>
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// 		`;
// })
// .join('');
