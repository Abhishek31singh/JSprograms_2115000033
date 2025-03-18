const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

let low = 1, high = 100;

const askQuestion = () => {
    if (low === high) {
        console.log(`Your magic number is ${low}!`);
        readline.close();
        return;
    }

    let mid = Math.floor((low + high) / 2);
    readline.question(`Is your number less than or equal to ${mid}? (yes/no): `, (answer) => {
        if (answer.toLowerCase() === "yes") {
            high = mid;
        } else {
            low = mid + 1;
        }
        askQuestion();
    });
};

console.log("Think of a number between 1 and 100.");
askQuestion();
