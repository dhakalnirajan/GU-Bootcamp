// Objects

const personOne = {
  name: 'Nirajan',
  // dynamic setting:
  // let key = "name-one"
  age: 20,
  gender: 'Male',
  address: 'Devdaha',
};

const personTwo = {
  name: 'Ram',
  age: 21,
  gender: 'Male',
  address: 'Kathmandu',
};

/* Another way to access properties of objects
let result = personOne['name']
console.log(result)
*/

console.log ('Name is: ', personOne.name);
console.log ('Age is: ', personOne.age);
console.log ('Gender is: ', personOne.gender);
console.log ('Address is: ', personOne.address);

console.log ('Name is: ', personTwo.name);
console.log ('Age is: ', personTwo.age);
console.log ('Gender is: ', personTwo.gender);
console.log ('Address is: ', personTwo.address);

console.log (typeof personOne.name);

personOne.name = 'Chandan';
personTwo.name = 'Prabesh';

console.log ('PersonOne name is replaced by: ', personOne.name);
console.log ('PersonTwo name is replaced by: ', personTwo.name);

// destructuring in Objects

personOne.name;

const {name, age, gender, address} = personOne;
console.log (name, age, gender, address);

// destructuring in Array

let numbers = [10, 20, 30, 40, 50, 60];

const [a, b, c] = numbers;

numbers[0];
console.log (a, b, c);

const [m, n, ...rest] = numbers;

numbers[0];

console.log (m, n, rest);

// Spread Operator

// Spread operator is used by: three periods followed by the object name. {...object_name}.

const personThree = {
  name: 'Arjun',
  age: 20,
  address: 'Devdaha',
};

const course = {
  name: 'B.IT',
  year: 4,
};

const student = {...personThree, ...course};

console.log (student);

const personFour = {
  name: 'Himal',
  age: 20,
  address: 'Butwal',
};

const PersonFive = {
  ...personThree,
  name: 'Hari',
  age: 30,
};

console.log (PersonFive);
