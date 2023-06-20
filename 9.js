/*Oue9). Check for divisibility
Write a program that takes an array of numbers and prints all the numbers that are divisible by 3, but not by 2.
Use a for loop and continuq statement.*/


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 18, 27, 30, 33];

for(let i = 0; i < numbers.length; i++) {
  if(numbers[i] % 3 !== 0 || numbers[i] % 2 === 0) {
    continue;
  }
  console.log(numbers[i]);
}

/**Output:
3
9
27
33
 */