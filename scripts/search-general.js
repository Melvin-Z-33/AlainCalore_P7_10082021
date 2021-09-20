import * as app from './app.js';
import * as showcards from './show-cards.js';



export const searchGeneral = async () => {


	// ! TEST FONCTION DE TRI
	let arrayAllDatas = await app.fetchRecipes();
	let arraySortByRecipe

	
	let arraySortByIngredients 

	const sortArray = (x,y) => {
		if (x.name < y.name) {return -1;}
		if (x.name > y.name) {return 1;}

	}

  arraySortByRecipe = arrayAllDatas.recipes.sort(sortArray);

	
	console.log(arraySortByRecipe.length) 
	let arrayDeleteElementDuplicate = []
	let data = [];
	let element;

let b = 'tar'



//? CODE QUI MARCHE------------------
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
//?-----------------------------------------









// const recherche = (array,val) => {
// 	let gauche = 0
// 	let droite = array.length -1
// 	let milieu
// 	let indice

// 	console.log(milieu)



// // const dichotomique = () => {

// // 	while (gauche <= droite){

// // 		milieu = Math.round((gauche + droite)/ 2)
	
		

// // 					if (val == array[milieu].name){
// // 						return  array[milieu].name
// // 					} else if (val < array[milieu].name){
// // 						droit = milieu -1
// // 					}else{
// // 						gauche = milieu +1
// // 					}
// // 				 return -1
// // 				}
// // 			}
// 		// (array[milieu].name.localeCompare(val))
// 		// 	  console.log("ok")
// 		//    } else {
// 		//  	  console.log("oki")
// 		//    }



// 		// }else if (milieu > val) {
// 		// 	// on cherche en tre gauche et milieu -1
// 		// 	droite = milieu -1 // limitue le tableau de droite

// 		// } else  (gauche = milieu +1)
// 		// 	//on cherche en tre milieu et droite

// 		// 	return -1 // PAs present dans le tableau
// 	}

// 		}}


// 	recherche(arraySortByRecipe, b)
	
// }







// ! FIN DE FONCTION TEST




