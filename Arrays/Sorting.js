let numbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 900) + 100);

numbers.sort((a, b) => a - b);

console.log("Sorted Numbers:", numbers);
console.log("2nd Smallest:", numbers[1]);
console.log("2nd Largest:", numbers[numbers.length - 2]);
