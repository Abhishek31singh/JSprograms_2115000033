const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

const celsiusToFahrenheit = (celsius) => {
    return celsius >= 0 && celsius <= 100 ? (celsius * 9 / 5) + 32 : "Enter a temperature between 0°C and 100°C.";
};

const fahrenheitToCelsius = (fahrenheit) => {
    return fahrenheit >= 32 && fahrenheit <= 212 ? (fahrenheit - 32) * 5 / 9 : "Enter a temperature between 32°F and 212°F.";
};

const convertTemperature = (choice, temp) => {
    switch (choice) {
        case "1": return celsiusToFahrenheit(temp);
        case "2": return fahrenheitToCelsius(temp);
        default: return "Invalid choice.";
    }
};

readline.question("Enter 1 for Celsius to Fahrenheit or 2 for Fahrenheit to Celsius: ", (choice) => {
    readline.question("Enter temperature: ", (temp) => {
        console.log("Converted Temperature:", convertTemperature(choice, parseFloat(temp)));
        readline.close();
    });
});
