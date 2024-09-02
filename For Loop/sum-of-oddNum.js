// sum-of-oddNum.js

// Subtask-1:
// Display sum of all the odd numbers from 91 to 129.
let sum = 0;
for (let i = 91; i <= 129; i++) {
  if (i % 2 !== 0) {
    // console.log(i);
    sum = sum + i;
  }
}
console.log("Total sum is Even number = ", sum);

// Subtask-2:
// Display sum of all the even numbers from 51 to 85.
let total = 0;
for (let i = 51; i <= 85; i++) {
  if (i % 2 === 0) {
    total += i;
    // total = total + i;
  }
}
console.log("Total sum is Even number = ", total);
