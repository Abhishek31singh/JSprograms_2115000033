let numbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 900) + 100);

let largest = -Infinity, secondLargest = -Infinity;
let smallest = Infinity, secondSmallest = Infinity;

for (let num of numbers) {
    if (num > largest) {
        secondLargest = largest;
        largest = num;
    } else if (num > secondLargest && num !== largest) {
        secondLargest = num;
    }

    if (num < smallest) {
        secondSmallest = smallest;
        smallest = num;
    } else if (num < secondSmallest && num !== smallest) {
        secondSmallest = num;
    }
}

console.log("Generated Numbers:", numbers);
console.log("2nd Largest:", secondLargest);
console.log("2nd Smallest:", secondSmallest);
