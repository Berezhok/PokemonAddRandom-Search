import { Pokemon } from "./classes.js";

const cardList = document.querySelector('.card-list');
const card = document.querySelector('.card');

export const fillPokemonCard = (pokemon) => {
    const cloneCard = card.cloneNode(true);
    const title = cloneCard.querySelector('h3');
    const image = cloneCard.querySelector('img');
    const propertiesText = cloneCard.querySelector('.properties p');

    const [description] = cloneCard.getElementsByClassName('description');
    title.innerText = pokemon.name;
    image.src = pokemon.image;
    propertiesText.innerText = `Experience ${pokemon.experience}`;
    //  ['<li>wisdom</li>', 'psycho', 'smile']
    // `<li>${el}</li>` ===> '<li>' + el + '</li>'
    description.innerHTML = `
        <h4> Abilities: </h4>
        <ul>
        ${pokemon.abilities.map((el) => `<li>${el}</li>`).join('')}
        </ul>
    `;
    cardList.append(cloneCard);
};


export const getPokemonByNameOrId = async (param) =>{
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${param}`)
    const result = await response.json();
    const {
        name,
        abilities: badAbilities,
        base_experience:experience,
        sprites:{front_default:image}
    } = result;
        const goodAbilities = badAbilities.map((el) => {
        const {
            ability: {name},
            } = el;
        return name;
    })
    const pokemon = new Pokemon(name,goodAbilities,experience,image);
    return pokemon;
}
