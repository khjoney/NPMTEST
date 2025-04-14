const giveMeAJoke = require("give-me-a-joke");
//console.dir(jokes)
giveMeAJoke.getRandomDadJoke(function(joke){
    console.log(joke);
})

console.log("Hello World");