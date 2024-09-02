// Subtask-1:
// Display sum of all the odd numbers from 81 to 131.
let i = 81;
let sum = 0;
while (i <= 131) {
  if (i % 2 !== 0) {
    sum += i;
    // console.log(i);
  }
  i++;
}
console.log("Sum of all odd number = ", sum);

// Subtask-2:
// Display sum of all the even numbers from 206 to 311.
let j = 206;
let total = 0;

while (j <= 311) {
  if (j % 2 === 0) {
    total += j;
    // console.log(j);
  }
  j++;
}
console.log("Sum of all even number = ", total);
