var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

// WRITE YOUR CODE BELOW
constellations.push("Canis Major")
console.log(constellations)

planets.splice(5, 5)
console.log(planets)

const Joint = constellations.concat(planets);
console.log(Joint)
console.log(Joint[6])

var NewStar = star.replace("polaris", "POLARIS")

console.log(NewStar)
console.log(star)

console.log(typeof(star))