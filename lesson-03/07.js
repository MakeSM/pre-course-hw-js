const numbers = [
   [1, 2, 3, 4, 5],
   [11, 20, 33, 40, 55],
   [111, 200, 333, 400, 555],
];

for (let i = 0; i < numbers.length; i++) {
   const elements = numbers[i];
   for (let j = 0; j < elements.length; j++) {
      let number = elements[j];
      if (number % 2 !== 0) {
         elements.splice(j, 1);
      }
   }
}

console.log(numbers);
