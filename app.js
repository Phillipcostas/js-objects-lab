const pokemon = require('./data.js')
const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  }

  // Exercise 3.) 
  game.difficulty = ["Easy" , "Medium" , "Hard"]
  console.log(game)


//Exercise 4
game.party.push(pokemon[3])
console.log(game)


//Exercise 5
game.party.push(pokemon[30] , pokemon[143] , pokemon[148])
console.log(game)


//Exercise 6
game.party.sort ((thisPokemon,nextPokemon) => {
  return nextPokemon.hp - thisPokemon.hp
})
console.log(game.party)

//Exercise 7
function compleatedGyms() {
  for (let i = 0; i < game.gyms.length; i++)
    if (game.gyms[i].difficulty <= 3){
       game.gyms[i].completed= true  
    }
  }
  compleatedGyms()
  console.log(game.gyms)
  
//Solve Exercise 8 here:

game.party.splice(3, game.party.length, pokemon[4])
console.log(game.party)

//Exercise 9
game.party.sort (function(name) {
  return pokemon.name
});
game.party.forEach((pokemon) => console.log(pokemon.name));


//Solve Exercise 10 here: 
pokemon.forEach(pokemon => {
  if (pokemon.starter) {
      console.log(pokemon)
  }
})

//Solve Exercise 11 here:
game.catchPokemon = (pokemonObj) => {
  game.party.push(pokemonObj)
  }
  game.catchPokemon(pokemon[129])
console.log(game.party)


//Solve Exercise 12 here:
game.catchPokemon = (pokemonObj) => {
  game.party.push(pokemonObj)
  game.items.pokeball--
  }
  game.catchPokemon(pokemon[129])
console.log(game.items)


//Solve Exercise 13 here:
function compleatedGyms() {
  for (let i = 0; i < game.gyms.length; i++)
    if (game.gyms[i].difficulty <= 6){
       game.gyms[i].completed= true  
    }
  }
  compleatedGyms()
  console.log(game.gyms)


//Solve Exercise 14 here:
game.gymStatus = () => {
  let completedGyms = 0
  let incompletedGyms = 0
      for (let i = 0; i< 0; i++) {
        if (game.gyms[i].completed === true)
        completedGyms++
      console.log(completedGyms)
  } 
    for (let i = 0; i< 0; i++) {
      if (game.gyms[i].completed === false)
      incompletedGyms--
    console.log(incompletedGyms)
      }
    }
    game.gymStatus ()
console.log(game.gymStatus)

  //console.log(gymTally = `complated gyms ${completedGyms}, incompleted gyms ${incompletedeGyms}`);
  
//Solve Exercise 15 here:
game.partyCount = () => {
  return game.party.length
}
game.partyCount()

//Solve Exercise 16 here:
function compleatedGyms() {
  for (let i = 0; i < game.gyms.length; i++)
    if (game.gyms[i].difficulty <= 8){
       game.gyms[i].completed= true  
    }
  }
  compleatedGyms()
  console.log(game.gyms)

//Solve Exercise 17 here:
console.log(game)
