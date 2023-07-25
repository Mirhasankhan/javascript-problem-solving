// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

function makeReverse(string) {
    let reverse = ""
    for (let i = string.length - 1; i >= 0; i--) {
        reverse += string[i]
    }
    return reverse;
}
// console.log(makeReverse("jasam"));

// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

function sumOnlyPositive(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            total += numbers[i]
        }
    }
    return total;
}
const result = sumOnlyPositive([10, -12, -10, 20])
// console.log(result);

// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

function calculate (num1, num2, operator){
    if(operator == '+'){
        return num1 + num2
    }
    else if(operator == '-'){
        return num1 - num2
    }
    else if(operator == '*'){
        return num1 * num2
    }
    else if(operator == '/'){
        if(num2 == 0){
            return "can not devide by zero"
        }
        return num1 / num2
    }
}
console.log(calculate(0,10,'*'));

