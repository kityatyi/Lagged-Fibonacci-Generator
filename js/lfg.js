// Lagged Fibonacci Generator
function lfg(num1, num2, num3) {
  // num1 is the starting number to build the fibonacci from
  // num2 sets the counter to limit iterations
  // num3 is a fallback in case num1 is consists of a single digit
  var int = num1; // the starting number
  var secondLastDigit; // the second last digit of num1
  var lastDigit; // the last digit of num1
  var newDigit; // the result of adding secondLastDigit to lastDigit mod 10

  for (var i = 0; i < num2; i++) {
    // prettier-ignore
    int = int.toString(); // converts number to string

    // checks if num1 is single digit
    if (int.length === 1) {
      int = int + num3; // concatenates num3 to num1 if condition evaluates true
    } else {
      int = int; // leaves num1 as it is if condition evaluates false
    }

    // console.log(int);

    secondLastDigit = int.charAt(int.length - 2); // defines secondLastDigit
    lastDigit = int.charAt(int.length - 1); // defines lastDigit
    secondLastDigit = parseInt(secondLastDigit); // converts secondLastDigit back to string
    lastDigit = parseInt(lastDigit); // converts lastDigit back to string
    // console.log(secondLastDigit);
    // console.log(lastDigit);

    newDigit = secondLastDigit + lastDigit; // defines newDigit

    // checks if addition results in two digit number
    if (newDigit > 9) {
      newDigit = newDigit - 10; // subtracts 10 from newDigit if condition evaluates true
    } else {
      newDigit = newDigit; // leaves newDigit as it is if condition evaluates false
    }
    // console.log(newDigit);

    int = int + newDigit; // concatenates newDigit to num1
    var finalInt = parseInt(int); // converts num1 back to number and assigns value to finalInt
    // console.log(finalInt);
  }
  return finalInt; // returns finalInt
}

var result = lfg(123, 15, 1); // declares result and calls function
console.log(result); // logs result to console
