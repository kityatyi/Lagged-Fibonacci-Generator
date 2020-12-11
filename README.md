Lagged Fibonacci Generator

Another training project. The function takes three number parameters: num1, num2 and num3.

function lfg(num1, num2, num3) {

The first parameter - num1 - is the starting number upon which the fibonacci is built. The second parameter - num2 - is the length of the fibonacci (the number of loop iterations). The third parameter - num3 - is a fallback value, used only if num1 for whatever reason consists of single digit. If this is is the case, then num3 is concatenated to num1 to make it more than one digit so that it can be used.

The fibonacci is built using mod 10 addition, adding together the last two digits. 

First, num1 is converted to string and the last two digits are located. If num1 was a single-digit number, then num3 is concatenated to num1.

Next, the mod 10 addition is carried out.

Finally, the resulting number is placed after the current last digit.

The resulting fibonacci is a string.

Zsolt