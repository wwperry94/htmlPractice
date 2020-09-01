// let, const
// String, Numbers, Boolean, null, undefined

let score = 30;
score = 100;
console.log(score);

//

const name = 'Will';
const age = 26;
const rating = 5;
const covalenceCool = true;
const x = null;
const y = undefined;
let z;
console.log(typeof true);

// Concantenation
console.log('My name is ' + name + ' and I am ' + age);
// Template String
const hello = `My name is ${name} and I am ${age}`;

console.log(hello);
//

const s = 'tech, computers, it, code';

console.log(s.split(', '));
//

// Array variables that hold multiple values

const fruits = new Array('apples', 'peaches', 'berries', 'pears');

fruits.push('lemon');

fruits.unshift('watermelon');

fruits.pop();

console.log(Array.isArray('hello'));

console.log(fruits.indexOf('peaches'));

console.log(fruits);

//

// Object Literals

const person = {
    firstName: 'Will',
    lastName: 'Perry',
    age: 26,
    hobbies: ['games', 'movies', 'sports', 'women'],
        address: {
        street: '801 Montclair Road',
        city: 'Birmingham',
        state: 'Alabama',
        zipCode: '35213',
    }
}

console.log(person.firstName, person.lastName);
console.log(person);