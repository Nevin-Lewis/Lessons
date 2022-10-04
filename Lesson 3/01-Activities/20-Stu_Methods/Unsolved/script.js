var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

// WRITE YOUR CODE BELOW
constellations.unshift("Canis Major")
console.log(constellations)

planets.splice(5, 1)
console.log(planets)

const Joint = constellations.concat(planets);
console.log(Joint)
console.log(Joint[6])

var NewStar = star.replace("polaris", "POLARIS")
// can also use var upperCaseSTart = start.toUpperCase();
// console.log(upperCaseStart);
//consol.log(galaxy); 

console.log(NewStar)
console.log(star)

console.log(typeof(star))