// exporting functions

function sum (x, y) {
  return x + y;
}

export function square (num) {
  return num * num;
}

export default sum; // function sum is the default export

export const n = 20; // exporting n with declaration in a single line

export const person = {
  name: 'Nirajan',
  age: 20,
  address: 'Devdaha',
};
