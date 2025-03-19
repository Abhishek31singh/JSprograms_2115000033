let dieRolls = new Map();
for (let i = 1; i <= 6; i++) dieRolls.set(i, 0);

while (true) {
    let roll = Math.floor(Math.random() * 6) + 1;
    dieRolls.set(roll, dieRolls.get(roll) + 1);

    if (dieRolls.get(roll) === 10) break;
}

let maxRoll = [...dieRolls.entries()].reduce((a, b) => (a[1] > b[1] ? a : b));
let minRoll = [...dieRolls.entries()].reduce((a, b) => (a[1] < b[1] ? a : b));

console.log("Die Roll Counts:", Object.fromEntries(dieRolls));
console.log("Most Frequent:", maxRoll[0]);
console.log("Least Frequent:", minRoll[0]);
