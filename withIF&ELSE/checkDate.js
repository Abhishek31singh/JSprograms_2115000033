const args = process.argv.slice(2);
const day = parseInt(args[0]);
const month = parseInt(args[1]);

if (isNaN(day) || isNaN(month)) {
    console.log("Invalid input. Please enter a valid day and month.");
} else {
    if ((month === 3 && day >= 20) || 
        (month === 4) ||               
        (month === 5) ||               
        (month === 6 && day <= 20)) {  
        console.log("true");
    } else {
        console.log("false");
    }
}
