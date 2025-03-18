const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const getPalindrome = (num) => {
    return parseInt(num.toString().split("").reverse().join(""));
};

const checkPrimeAndPalindrome = (num) => {
    if (!isPrime(num)) {
        console.log(`${num} is not a prime number.`);
        return;
    }
    console.log(`${num} is a prime number.`);
    let palindrome = getPalindrome(num);
    console.log(`Palindrome of ${num} is ${palindrome}.`);
    console.log(`${palindrome} ${isPrime(palindrome) ? "is" : "is not"} a prime number.`);
};

const args = process.argv.slice(2);
const num = parseInt(args[0]);

if (!isNaN(num)) {
    checkPrimeAndPalindrome(num);
} else {
    console.log("Enter a valid number.");
}
