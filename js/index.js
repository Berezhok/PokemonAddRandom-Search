// import { Pokemon as RenamePoke } from './classes.js';
// import mockedPokemons from './mockedPokemons.js';
// // import { fillPokemonCard } from './seeder.js';
// const btn = document.querySelector('button');

// const pokemonsList = mockedPokemons.map((pokemon) => {
//     const {
//         name,
//         abilities,
//         base_experience: experience,
//         sprites: { front_default: image },
//     } = pokemon;
//     // const { front_default: image } = sprites;
//     // const abilitiesNames = abilities.map(el => el.ability.name);
//     const abilitiesNames = abilities.map((el) => {
//         const {
//             ability: { name },
//         } = el;
//         return name;
//     });
//     return new RenamePoke(name, abilitiesNames, experience, image);
// });



// let input = document.querySelector(".pole");
// let btn2 = document.querySelector(".btn2");

// // btn2.onclick=function(){                         //клик по кнопке
//     //     alert(input.value);
//     // }
//     btn2.addEventListener('click', function(event) {   // клик по кнопке
//         alert(`👉${input.value}👈`);
//     });
//     document.addEventListener('keydown', function(event) {  // нажатие enter
//         if (event.code == 'Enter') {
//             alert(`👉${input.value}👈`);
//         }
//     });


    // btn.addEventListener('click', (event) => {
    //    let randomlist = pokemonsList[Math.floor(Math.random() * 3)];
    //   fillPokemonCard(randomlist);
    // });  
    // Math.floor(Math.random() * 3)