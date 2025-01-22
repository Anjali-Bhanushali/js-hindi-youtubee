const name = "Anjali"
const repocount = 50

// console.log(name + repocount + " value");

console.log(`Hello my name is ${name} and my repocount is ${repocount}`);//using back ticks(``) string interpolation which increases the readability of the program.

const gameName = new String('Anjali-singh-bhanushali')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('j'));

const newstring = gameName.substring(0,4);
console.log(newstring);

const anotherstring = gameName.slice(-8, 4)
console.log(anotherstring);

const newStringOne = "  Anjali   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://anjali.com/anjali%20singh"

console.log(url.replace('%20', '-'));
console.log(url.includes('anjali'));
console.log(url.includes('sundar'));

console.log(gameName.split('-'));
