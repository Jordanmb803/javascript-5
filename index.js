const _ = require('lodash');
const axios = require('axios');
const movies = require('./movies.json');

let states = {
    california:{population:38332523, size:162695},
    texas:{population:26448193, size:268580},
    newYork:{population:19651127, size:54556},
    florida:{population:19552860, size:65754},
    illinois:{population:12882135, size:57914},
    pennsylvania:{population:12773801, size:46055},
    ohio:{population:11570808, size:44824}
  }
 
// map -> mapValues / mapKeys

let stateArray = _.map(states, (element, index, wholeObject) => {
    return element.density = element.population / element.size
})



// forEach -> forIn / forOwn,  

// find
let foundMovie = _.find(movies, {
    year: '2006'

})

// groupBy

let moviesByYear = _.groupBy(movies, 'year')
let moviesByDecade = _.groupBy(movies, (movie) => {
    return Math.floor(movie.year / 10) * 10
})

// union

let bracksDieties = ['Auril, goddess of winter', 
                        'Bane, god of tyranny', 
                        'Lathander, god of birth and renewal', 
                        'Myrkul, god of death', 
                        'Umberlee, goddess of the sea',
                        'Tempus, god of war', 
                        'Mystra, goddess of magic', 
                        'Fharlanghn, god of travelers'];

let jeremysDieties = ['Mystra, goddess of magic', 
                        'Talona, goddess of disease and poison', 
                        'Oghma, god of knowledge', 
                        'Loviatar, goddess of pain', 
                        'Cyric, god of lies' , 
                        'Lathander, god of birth and renewal',
                        'Sune, goddess of love and beauty'];

let toddsDieties = ['Bane, god of tyranny',
                        'Fharlanghn, god of travelers',
                        'Talona, goddess of disease and poison',
                        'Helm, god of protection',
                        'Gond, god of craft', 
                        'Lathander, god of birth and renewal', 
                        'Tyr, god of justice'];

let allDieties = _.union(bracksDieties, jeremysDieties, toddsDieties)

// intersection

let dinnerInvites = _.intersection(bracksDieties, jeremysDieties, toddsDieties)


// memoize
let slowFunction = function(n){
    let total = 0;
    for (var i=0;i<n;i++){
        for (var j=0;j<n;j++){
            for (var k=0;k<n;k++){
                total += 1;
            }
        }
    }
    return total;
}

let memFunction = _.memoize(slowFunction);

console.time('slowFunc 1');
slowFunction(100);
console.timeEnd('slowFunc 1');

// We can memoize API requests
function getPerson(i){
    return axios.get('https://swapi.co/api/people/' + i)
}

console.time('api call1')
getPerson(5).then(data => {
    console.log(data.data)
    console.timeEnd('api call1')
})

// Debounce

function doStuff(a) {
    console.log(a)
}

let debound = _.debounce(doStuff, 100);

for (var i=0; i<50; i++) {
    debound(i);
}


// Throttle

let throttled = _.throttle(doStuff, 100)

for(var i = 0; i< 50; i++) {
    throttled(i);
}

