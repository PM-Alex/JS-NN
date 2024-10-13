const numbers = [];
for(let i = 0; i < 10; i++){
  number = Number(prompt("Ingrese un número: "));
  numbers.push(number);
}
numbers.sort((a, b) => b - a);
highestNumber = numbers[0];

console.log(numbers);
console.log(highestNumber);