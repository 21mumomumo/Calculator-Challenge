/**
 * Calculator function that performs basic arithmetic operations
 * @param {number} num1 - First number
 * @param {number} num2 - Second number
 * @param {string} operator - Arithmetic operator (+, -, *, /)
 * @returns {number|string} Result of calculation or error message
 */
function calculator(num1, num2, operator) {
  // Check if the inputs are valid numbers
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Error: Please provide valid numbers";
  }

  let result;
  // Use switch statement to perform the calculation
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      // Check for division by zero
      if (num2 === 0) {
        return "Error: Division by zero is not allowed";
      }
      result = num1 / num2;
      break;
    default:
      return "Error: Invalid operator. Please use +, -, *, or /";
  }
  return result;
}

// Interactive testing using readline
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Welcome to Calculator Testing!");
console.log(
  'Enter numbers and operator when prompted (or type "exit" to quit)'
);

function askQuestion() {
  readline.question("\nEnter first number: ", (num1) => {
    if (num1.toLowerCase() === "exit") {
      readline.close();
      return;
    }

    readline.question("Enter second number: ", (num2) => {
      readline.question("Enter operator (+, -, *, /): ", (operator) => {
        // Convert string inputs to numbers
        const result = calculator(Number(num1), Number(num2), operator);
        console.log(`Result: ${num1} ${operator} ${num2} = ${result}`);

        // Ask for next calculation
        askQuestion();
      });
    });
  });
}

// Start the interactive testing
askQuestion();
