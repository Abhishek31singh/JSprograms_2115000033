const args = process.argv.slice(2);
const n = parseInt(args[0]);

if (isNaN(n) || n < 0) {
    console.log("Enter a valid non-negative number.");
} else {
    for (let i = 0; i <= n; i++) {
        console.log(`2^${i} = ${Math.pow(2, i)}`);
    }
}
