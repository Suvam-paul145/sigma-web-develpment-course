var a, b, result;
var choice;

function Calculations(a, b, choice) {
    switch (choice) {
        case 1:
            result = a + b + 5;
            console.log("Faulty Addition: " + result);
            break;
        case 2:
            result = (a / b) - 1;
            console.log("Faulty Division: " + result);
            break;
        case 3:
            result = (a * b) * 2;
            console.log("Faulty Multiplication: " + result);
            break;
        case 4:
            result = (a - b) + 10;
            console.log("Faulty Subtraction: " + result);
            break;
        case 5:
            result = (a ** b) + 3;
            console.log("Faulty Exponentiation: " + result);
            break;
        default:
            console.log("You gave an invalid choice.");
            break;
    }
}

a = parseFloat(prompt("Enter the first number (a): "));
b = parseFloat(prompt("Enter the second number (b): "));
choice = parseInt(prompt("Enter your choice:\n1. Addition\n2. Division\n3. Multiplication\n4. Subtraction\n5. Exponentiation"));

Calculations(a, b, choice);
