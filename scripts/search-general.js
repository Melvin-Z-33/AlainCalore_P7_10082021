import * as app from './app.js';
import * as showcards from './show-cards.js';



export const searchGeneral = async () => {
	let arrayDeleteElementDuplicate = []
	let data = [];
	let element;

	let arraySortByRecipe


	let arrayAllDatas = await app.fetchRecipes();
	console.log(app.bookOfRecipes.recipes)


	//TRI TABLEAU DANS L 'ORDRE
	const sortArray = (x,y) => {
		if (x.name < y.name) {return -1;}
		if (x.name > y.name) {return 1;}
		console.log(x)
	}

	arraySortByRecipe = arrayAllDatas.recipes.sort(sortArray);

	const val_recherche = "riz";

	const SearchDichotomique= (l, searchTerm) =>{
	let indiceGauche = 0
	let indiceDroite = l.length -1;
	let indiceMilieu

	while (indiceGauche <= indiceDroite){

		indiceMilieu = Math.round((indiceGauche + indiceDroite) / 2)

		let b = l[indiceMilieu].name.indexOf(searchTerm)
		console.log('cestB' + b)

		if ( b === 10) {
			console.log("trouvé")
			return "oki"
		} else {
			console.log("algo")
			let a = new Intl.Collator("fr", {sensitivity: "base"}).compare(l[indiceMilieu].name,searchTerm )

				alert(l[indiceMilieu].name)
			alert(a)
			//console.log(val_recherche.localeCompare(searchTerm[indiceMilieu].name, indice'fr', { sensitivity: 'base' }))
			console.log(a)
			if  (a == 0){
			console.log(indiceMilieu)
			return "finish"
			} else if ( a  > 0){
			indiceDroite = indiceMilieu - 1

			} else if (a < 0) {
			indiceGauche = indiceMilieu +1
			} else{
				return "zap"
			}
		}
	}
}



let indice = SearchDichotomique(arraySortByRecipe, val_recherche)

if (indice != 1) {
	console.log("oki")
} else {
	console.log("ko")
}



}









// SEQUENTIEL / DICHOTOMIQUE

//?  CODE QUI MARCHE
	// if (app.searchTerm.length === 0) {
	// 	showcards.displayCards(app.bookOfRecipes.recipes)

	// } else if (app.searchTerm.length >= 3) {

	// 	app.bookOfRecipes.recipes
	// 	.filter((recipe) => {

	// 		for (element of recipe.ingredients) {
	// 			if (element.ingredient.toLowerCase().includes(app.searchTerm.toLowerCase())){
	// 				data.push(recipe)
	// 			}
	// 		}

	// 		if (recipe["name"].toLowerCase().includes(app.searchTerm.toLowerCase())){
	// 			data.push(recipe)
	// 		} else if (recipe["description"].toLowerCase().includes(app.searchTerm.toLowerCase())){
	// 		data.push(recipe)
	// 		}
	// 	})

	// 	arrayDeleteElementDuplicate = [...new Set(data)];
	// 	showcards.displayCards(arrayDeleteElementDuplicate)
	// };