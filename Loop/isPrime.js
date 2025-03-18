const args = process.argv.slice(2);
const num = parseInt(args[0]);

if (isNaN(num) || num <= 1) {
    console.log("Enter a number greater than 1.");
} else {
    let isPrime = true;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    console.log(num + (isPrime ? " is Prime." : " is Not Prime."));
}
