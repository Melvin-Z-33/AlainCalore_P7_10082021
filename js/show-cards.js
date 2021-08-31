import * as app from './app.js';
export let arrayOfObjets = [];

export const displayCards = (arrayOfRecipe) =>{

  document.querySelector('#result-cards').innerHTML = '';

  let arrayOfIngredients = '';
  let totalofIngredients=[];
  let count = 1;

  app.comboIngredient.innerHTML = "";

  for (let objet of arrayOfRecipe) {
    for (let ingredient of objet.ingredients){

      if (
      ingredient.hasOwnProperty('ingredient') &&
      ingredient.hasOwnProperty('quantity') &&
      ingredient.hasOwnProperty('unit')
      ) {
      arrayOfIngredients += `<p><span class="lato-bold">${ingredient.ingredient}</span> : ${ingredient.quantity} ${ingredient.unit}</p> `;
      } else if (ingredient.hasOwnProperty('ingredient') && ingredient.hasOwnProperty('quantity')) {
      arrayOfIngredients += `<p><span class="lato-bold">${ingredient.ingredient}</span> : ${ingredient.quantity} </p> `;
      } else if (ingredient.hasOwnProperty('ingredient')) {
      arrayOfIngredients += `<p><span class="lato-bold">${ingredient.ingredient}</span>  </p> `;
      }
      totalofIngredients.push(ingredient.ingredient);
    }

  let htmlforCards = `
    <div class="card  col-sm-12 col-md-3 mx-4 ">
      <img class="" alt="" src="http://via.placeholder.com/10">
      <div class="card-body container">
          <div class="row justify-content-between">
              <h2  class="card-title lato-bold text-hidden col-8">${objet.name}</h2>
              <p class="card-timer lato-bold col-4 text-end"><i class="far fa-clock"></i> ${objet.time} min</p>
              <div class="card-ingredient  col-6">${arrayOfIngredients}</div>
              <div class="card-text   col-6 text-start ">
                  <p class=" description lato-regular ">${objet.description}</p>
              </div>
          </div>
      </div>
    </div>
        `;
    document.querySelector('#result-cards').insertAdjacentHTML('beforeend', htmlforCards);

    arrayOfIngredients = '';
    arrayOfObjets.push(objet);
    count++;

  }
  console.log(arrayOfObjets)

  totalofIngredients.map((recipe) => app.comboIngredient
		.insertAdjacentHTML('beforeend', `<option class="col-4" value="${recipe}"  >${recipe}</option>`));

};



// 1) Si un tri est utilise
// SI dans la ession storage

//2)creer un tableau d'objet
//3) utiliser methode de tri sur tableau d'objet



export const showAllIngredients = () => {
  let arrayDeleteElementDuplicate = [];
  let arrayForIngredients = [];


		for (let recipe of app.bookOfRecipes.recipes) {

      for (let ingredient of recipe.ingredients){
				arrayForIngredients.push(ingredient.ingredient)
			}
			arrayDeleteElementDuplicate = [...new Set(arrayForIngredients)]

    }

		arrayDeleteElementDuplicate.map((recipe) => app.comboIngredient
		.insertAdjacentHTML('beforeend', `<option class="col-4" value="${recipe}" >${recipe}</option>`))
  }

