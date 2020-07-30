"use strict";

let input;
const numbers = [];
let total = 0;

for (
  input = prompt("Введите число");
  input !== null;
  input = prompt("Введите число")
) {
  numbers.push(+input);
}

for (let number of numbers) {
  total = total + number;
}

console.log(`Общая сумма чисел равна ${total}`);
