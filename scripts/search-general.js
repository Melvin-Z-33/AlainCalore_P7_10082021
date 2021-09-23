import * as app from './app.js';
import * as showcards from './show-cards.js';



	//TRI TABLEAU DANS L 'ORDRE
	const sortArray =   (x,y) => {
		if (x.name < y.name) {return -1;}
		if (x.name > y.name) {return 1;}
	}




export const searchGeneral = async () => {
	let arraySortByRecipe
	let arrayAllDatas

	arrayAllDatas = await app.fetchRecipes();
	arraySortByRecipe =  arrayAllDatas.recipes.sort(sortArray);

	console.log(app.bookOfRecipes.recipes)






	const SearchDichotomique =  async (l, searchTerm) =>{
	let indiceGauche = 0
	let indiceDroite = l.length -1;
	let indiceMilieu
	let value=[];

		while ( indiceGauche <= indiceDroite){

			indiceMilieu =  Math.round((indiceGauche + indiceDroite) / 2);
			let b = l[indiceMilieu].name.toLowerCase().indexOf(searchTerm.toLowerCase());
			console.log('cest B' + b);
			console.warn(l[indiceMilieu].name)

			if ( b >= 0)  {
				console.log("trouvé")
				value.push(l[indiceMilieu])

				if (l[indiceMilieu -1] !== undefined) {
					console.log("part en arriere")
					if (l[indiceMilieu-1].name.toLowerCase().includes(searchTerm.toLowerCase())) {
						for (let i = indiceMilieu -1; i > -1; i--) {
							console.warn("2nd recherche" + " " + l[i].name )
							if (l[i].name.toLowerCase().includes(searchTerm.toLowerCase())) {
								value.push(l[i])
							} else {
								break
							}
						}
					}
				}
				if (l[indiceMilieu+1] !== undefined) {
					console.log("part en avant")
					if (l[indiceMilieu+1].name.toLowerCase().includes(searchTerm.toLowerCase())) {
						for (let i = indiceMilieu+1; i < l.length; i++) {
							console.warn("2nd recherche" + " " + l[i].name )
							if (l[i].name.toLowerCase().includes(searchTerm.toLowerCase())) {
								value.push(l[i])
							} else {
								break
							}
						}
					}
				}
				console.log(value)
				return value

			} else  {
			console.log("algo")
			let a = new Intl.Collator("fr", {sensitivity: "base"}).compare(l[indiceMilieu].name,searchTerm )
			alert(l[indiceMilieu].name)
			alert(a)
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


const val_recherche = "coco";
let indice  =  SearchDichotomique(arraySortByRecipe , val_recherche)

if (indice != 1) {
	console.log("le mot n'existe pas i")
} else {
	console.log("ok")
}

}


//! TESTING FUNCT



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