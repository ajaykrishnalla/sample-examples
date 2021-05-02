// const isPrimeNumber = (num) => {
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return num > 1;
// };

// const getPrimeNumbers = () => {
//   let primeNumbers = [];
//   for (let index = 2; index < 1000; index++) {
//     if (isPrimeNumber(index)) {
//       primeNumbers.push(index);
//     }
//   }
//   return primeNumbers;
// };

// console.log(getPrimeNumbers());

// let numbers = [10, 12, 8, 5, 1, 20, 24, 38, 49];

// let done = false;
// while (!done) {
//   done = true;
//   for (let index = 0; index < numbers.length; index++) {
//     if (numbers[index] < numbers[index + 1]) {
//       done = false;
//       let temp = numbers[index + 1];
//       numbers[index + 1] = numbers[index];
//       numbers[index] = temp;
//     }
//   }
// }

// console.log(numbers);

/// reverse of a number;

// const reverseOfNumber = (n) => {
//   let digit, result = 0 ;

//   while (n) {
//     digit = n % 10;
//     result = (result*10)+digit;
//     n = n /10|0;
//   }
//   return result;
// };

// console.log(reverseOfNumber(670));

// let numbers_array = [1, 2, 3, 4, 5];
// let min = Infinity;
// let max = -Infinity;
// numbers_array.forEach((number) => {
//   if (number < min) {
//     min = number;
//   }

//   if (number > max) {
//     max = number;
//   }
// });

// console.log(min, max);
