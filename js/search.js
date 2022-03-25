// let input = document.querySelector(".pole");
// let btn2 = document.querySelector(".btn2");
// console.log(input,btn2)
// btn2.onclick=function(){                         //клик по кнопке
    //     alert(input.value);
    // }
 import { Pokemon } from "./classes.js";
 import { fillPokemonCard, getPokemonByNameOrId  } from "./const.js";  
  const form = document.querySelector(".search");
    form.addEventListener('submit', async (event) => { 
        event.preventDefault();
        try {
            const 
            {pokemonName:{value}}
         = event.target;
         if(!value || value.trim() === ""){
             alert("Введите имя покемона без пробелов!!!")
         }
           const pokemon = await getPokemonByNameOrId(value.toLowerCase());
           fillPokemonCard(pokemon);
         } catch (error) {
           throw alert(`Такого покемона нет.`)            
        }
    })
    
    
    //     const input = event.target.querySelector("input")  
    // alert(`👉${input.value}👈`);
    // });
    // document.addEventListener('keydown', (event) {  // нажатие enter
    //     if (event.code == 'Enter') {
    //         alert(`👉${input.value}👈`);
    //     }
    // });