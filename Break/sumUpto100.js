// Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
let num = 1;
let sum = 0;
let total;
while (num <= 20000) {
  total = sum + num;
  if (total === 100) {
    break;
  }
  num++;
  console.log(total);
}
