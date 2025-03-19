let birthMonths = new Map();
for (let i = 1; i <= 12; i++) birthMonths.set(i, []);

for (let i = 1; i <= 50; i++) {
    let month = Math.floor(Math.random() * 12) + 1;
    birthMonths.get(month).push(i);
}

console.log("Individuals by Birth Month:");
birthMonths.forEach((people, month) => console.log(`Month ${month}:`, people));
