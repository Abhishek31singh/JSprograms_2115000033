const args = process.argv.slice(2);
const num = parseInt(args[0]);

if (isNaN(num) || num < 0) {
    console.log("Enter a non-negative number.");
} else {
    let factorial = 1;
    for (let i = 2; i <= num; i++) {
        factorial *= i;
    }
    console.log(`${num}! = ${factorial}`);
}
