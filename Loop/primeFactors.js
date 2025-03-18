const args = process.argv.slice(2);
let num = parseInt(args[0]);

if (isNaN(num) || num < 2) {
    console.log("Enter a number greater than 1.");
} else {
    while (num % 2 === 0) {
        console.log(2);
        num /= 2;
    }

    for (let i = 3; i * i <= num; i += 2) {
        while (num % i === 0) {
            console.log(i);
            num /= i;
        }
    }

    if (num > 2) console.log(num);
}
