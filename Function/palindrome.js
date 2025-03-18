const isPalindrome = (num) => {
    let reversed = parseInt(num.toString().split("").reverse().join(""));
    return num === reversed;
};

const checkPalindromes = (num1, num2) => {
    console.log(`${num1} ${isPalindrome(num1) ? "is" : "is not"} a palindrome.`);
    console.log(`${num2} ${isPalindrome(num2) ? "is" : "is not"} a palindrome.`);
};

const args = process.argv.slice(2);
const num1 = parseInt(args[0]);
const num2 = parseInt(args[1]);

if (!isNaN(num1) && !isNaN(num2)) {
    checkPalindromes(num1, num2);
} else {
    console.log("Enter two valid numbers.");
}
