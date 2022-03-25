import { Pokemon } from "./classes.js";
import { fillPokemonCard, getPokemonByNameOrId } from "./const.js";

const btn = document.querySelector('button');


btn.addEventListener("click",  async (event) =>{
    const randomOneHundred = Math.floor(Math.random()*100);
    const pokemon = await getPokemonByNameOrId(randomOneHundred);
    fillPokemonCard(pokemon);
    })


