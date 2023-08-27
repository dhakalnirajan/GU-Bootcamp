for (let i = 0; i <= 2; i++) {
  console.log (i);
}

let numbers = [1, 5, 2, 6, 7, 9, 11, 0];

let result = 0;

// for (i = 0; i < 3; i++) {
//   result += numbers[i];
// }

// console.log (result);

// Loop using forEach Loop Function

numbers.forEach (number => {
  console.log (number);
});

// loop using map

let results = numbers.map (item => {
  return item + 'a';
});

console.log (results);

// using filter 1

let filtered = numbers.filter (item => {
  return item > 2;
});

console.log (filtered);

result_value = [32, 20, 50, 55, 92, 8, 30];
// using filter 2

let filtered2 = result_value.filter (item => {
  return item < 40;
});

console.log (filtered2);
