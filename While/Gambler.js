let money = 100, wins = 0, bets = 0;

while (money > 0 && money < 200) {
    bets++;
    let betResult = Math.random() < 0.5 ? "Lose" : "Win";
    if (betResult === "Win") {
        money++;
        wins++;
    } else {
        money--;
    }
    console.log(`Bet ${bets}: ${betResult} (Money: Rs.${money})`);
}

console.log(`Game Over! Total Bets: ${bets}, Total Wins: ${wins}`);
console.log(money === 200 ? "You reached your goal of Rs.200!" : "You went broke!");
