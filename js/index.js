const x = 10;
const y = 20;

const z = x + y;
console.log ('x : ', x, 'y: ', y, 'z :', z);

let name = 'Nirajan Dhakal';

console.log ('Name is: ', name);

// Array

let names = ['Nirajan', 'Dhakal'];

console.log ('My Name is: ', names[0], names[1]);

// Object

let person = {
  name: 'Nirajan',
  age: 20,
  gender: 'Male',
};

console.log ('Name is: ', person.name);
console.log ('Age is: ', person.age);
console.log ('Gender is: ', person.gender);

console.log (typeof person.name);

// Functions

// Greet (static)
function greet () {
  console.log ('Hello Nirajan');
}

greet ();

// greet (dynamic)
function Greet (name) {
  console.log ('Hello ' + name);
}

Greet ('Nirajan');

// square of a number
function square (number) {
  console.log (number * number);
}

square (4);

// Arrow Function

const Greeting = name => {
  console.log ('Hello ' + name);
};

Greeting ('Nirajan');

// Arrow Function with return

const Greets = name => {
  return 'Hello ' + name;
};

const result = Greets ('Nirajan');
console.log (result);

// Arrow function for square of a number
const sq = num => num * num;

let output = square (10);
console.log (output);

// Arrow Function with return and object

const Greeet = name => {
  return {
    message: 'Hello ',
  };
};

const results = Greeet ('Nirajan');
console.log (results);

// anonymous function call

(function () {
  console.log ('Hello Chandan and Prabesh');
}) ();

// callback function
function display (item) {
  let result = 0;
  item.forEach (n => {
    result += n;
  });
  console.log (result);
}

display ([2, 3, 4]);
