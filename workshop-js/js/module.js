// Importing functions from other JS files to use as a module

import sum from './function.js';
import {square, n, person} from './function.js';

let result = sum (20, 30);
console.log (result);

console.log (square (5));
