async function getPokemon(){
    // co qui attend une promise
    let promise = await fetch("https://pokebuildapi.fr/api/v1/pokemon");
    // verif si co est ok
    if(promise.ok == true){
        // trnsformation en tableau json
        let pokemons = await promise.json();
        //je return mon tableau json pokemons
        return pokemons;
    }else{
        // si error
    }
}

import { colors } from "./fetchpokemons.js";






async function showPokemons(pokemons){
    console.log(pokemons);

    const randomPokemons = pokemons.sort(() => 0.5 - Math.random()).slice(0, 9);

    const pokedexElement = document.getElementById('pokedexContainer');
    randomPokemons.forEach(pokemon => {


        const articleElement = document.createElement('article');
        const spanElement = document.createElement('span')
        const h2Element = document.createElement('h2');
        const img = document.createElement('img');
        const btnElement = document.createElement('button');

        img.setAttribute('src', pokemon.image );
        img.setAttribute('alt', pokemon.name );
        articleElement.setAttribute('id','pokemonByType');
        


        const namePokemon = document.createTextNode(pokemon.name);
        const typePokemon = document.createTextNode('Type : ' +             
        pokemon.apiTypes[0].name);
        
        const btn =  document.createTextNode('Statistique');

        const colorElement = pokemon.apiTypes[0].name;
        const type = pokemon.apiTypes[1].name;

        console.log(colorElement);
        
        







        if (colorElement  === "Feu" ){

            articleElement.style.background = colors.fire;
            } else if ( colorElement === "Poison" ){
                articleElement.style.background = colors.poison;
            } else if ( colorElement === "Électrik" ){
                articleElement.style.background = colors.electric;
            } else if ( colorElement === "Eau" ){
                articleElement.style.background = colors.water;
            }else if ( colorElement === "Vol" ){
                articleElement.style.background = colors.flying;
            }else if ( colorElement === "Normal" ){
                articleElement.style.background = colors.normal;
            }else if ( colorElement === "Combat" ){
                articleElement.style.background = colors.fighting;
            }else if ( colorElement === "Fée" ){
                articleElement.style.background = colors.fairy;
            }else if ( colorElement === "Insecte" ){
                articleElement.style.background = colors.bug;
            }else if ( colorElement === "Sol" ){
                articleElement.style.background = colors.ground;
            }else if ( colorElement === "Roche" ){
                articleElement.style.background = colors.rock;
            }else if ( colorElement === "Psy" ){
                articleElement.style.background = colors.psychic;
            }else if ( colorElement === "Plante" ){
                articleElement.style.background = colors.grass;
            }else if ( colorElement === "Dragon" ){
                articleElement.style.background = colors.dragon;
            }else if ( colorElement === "Spectre" ){
                articleElement.style.background = colors.steel;
            }else if ( colorElement === "Glace" ){
                articleElement.style.background = colors.ice;
            }else if ( colorElement === "Acier" ){
                articleElement.style.background = colors.steel;
            }else if ( colorElement === "Ténèbres" ){
                articleElement.style.background = colors.dark;
                articleElement.style.color = "#FFF"
                btnElement.style.color="#FFF"
            } 
            
            



            
            const ulElement = document.createElement('ul');
            const liType = document.createElement('li')
            const imgType = document.createElement('img');

            imgType.setAttribute('src',pokemon.apiTypes[0].image );
            imgType.style.width = "50px";
            

            liType.appendChild(imgType);
            ulElement.appendChild(liType);
            


      
            btnElement.addEventListener('click', function(){
                articleElement.removeChild(spanElement);
                articleElement.removeChild(img);
                articleElement.removeChild(btnElement);


                articleElement.appendChild(ulElement)

                
                
            });

        
        h2Element.appendChild(namePokemon);
        spanElement.appendChild(typePokemon);
        btnElement.appendChild(btn);

        pokedexElement.appendChild(articleElement);
        articleElement.append(h2Element,img,spanElement,btnElement);
        
        

      
        
        
        
    });
    

   

    
   

}



getPokemon().then(pokemons => showPokemons(pokemons));