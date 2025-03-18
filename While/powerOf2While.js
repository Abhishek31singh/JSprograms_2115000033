const args = process.argv.slice(2);
const n = parseInt(args[0]);

if (isNaN(n) || n < 0) {
    console.log("Enter a valid non-negative number.");
} else {
    let i = 0;
    let power = 1;
    while (i <= n && power <= 256) {
        console.log(`2^${i} = ${power}`);
        power *= 2;
        i++;
    }
}
