const args = process.argv.slice(2);
const choice = parseInt(args[0]);
const value = parseFloat(args[1]);

switch (choice) {
    case 1:
        console.log(value + " Feet = " + (value * 12) + " Inches");
        break;
    case 2:
        console.log(value + " Feet = " + (value * 0.3048) + " Meters");
        break;
    case 3:
        console.log(value + " Inches = " + (value / 12) + " Feet");
        break;
    case 4:
        console.log(value + " Meters = " + (value / 0.3048) + " Feet");
        break;
    default:
        console.log("Enter a valid choice: 1 (Feet to Inch), 2 (Feet to Meter), 3 (Inch to Feet), 4 (Meter to Feet)");
}
