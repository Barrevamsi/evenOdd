let evenSum = 0;
let oddSum = 0;

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    evenSum += i;
  } else {
    oddSum += i;
  }
}

console.log(`The sum of even numbers up to 10 is ${evenSum}`);
console.log(`The sum of odd numbers up to 10 is ${oddSum}`);
