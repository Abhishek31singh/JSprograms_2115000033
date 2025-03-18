let numbers=[];
for(let i=0;i<5;i++){
    let random =Math.floor(Math.random()*(999-100+1))+100;
    numbers.push(random);
}
let min = Math.min(...numbers);
let max = Math.max(...numbers);
console.log("Generated Numbers:", numbers);
console.log("Minimum Value:", min);
console.log("Maximum Value:", max);