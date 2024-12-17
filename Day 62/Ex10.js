/* Questions/* Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub -->*/

let random = Math.random();
console.log(random);
let first, second, third;

if (random < 0.33) {
    first = "Crazy"
}
else if (random >= 0.33 && random < 0.66) {
    first = "Amazing";
}
else {
    first = "Fire";
}

if (random < 0.33) {
    second = "Engine"
}
else if (random >= 0.33 && random < 0.66) {
    second = "Foods";
}
else {
    second = "Garments";
}

if (random < 0.33) {
    third = "Bros"
}
else if (random >= 0.33 && random < 0.66) {
    third = "Limited";
}
else {
    third = "Hub";
}
console.log(first + second + third)  // or you can write it also **console.log(` ${first} ${second} ${third}`);

