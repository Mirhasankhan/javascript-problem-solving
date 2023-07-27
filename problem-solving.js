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
// const result = sumOnlyPositive([10, -12, -10, 20])
// console.log(result);

// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

function findMostFrequentElement(arr) {
    let frequencyMap = {};

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        frequencyMap[element] = (frequencyMap[element] || 0) + 1;
    }

    let mostFrequentElement;
    let highestFrequency = 0;

    for (const element in frequencyMap) {
        if (frequencyMap[element] > highestFrequency) {
            highestFrequency = frequencyMap[element];
            mostFrequentElement = element;
        }
    }

    return mostFrequentElement;
}


const array = [1, 2, 3, 2, 2, 4, 5, 4, 2];
console.log("Most frequent element:", findMostFrequentElement(array));


// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

function calculate(num1, num2, operator) {
    if (operator == '+') {
        return num1 + num2
    }
    else if (operator == '-') {
        return num1 - num2
    }
    else if (operator == '*') {
        return num1 * num2
    }
    else if (operator == '/') {
        if (num2 == 0) {
            return "can not devide by zero"
        }
        return num1 / num2
    }
}
// console.log(calculate(0,10,'*'));

// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

function generatePassword(length) {
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialCharacters = '!@#$%^&*()_-+=[]{}|;:,.<>?';
    const allCharacters = uppercaseLetters + lowercaseLetters + numbers + specialCharacters;

    let password = ''
    password += uppercaseLetters.charAt(Math.floor(Math.random() * uppercaseLetters.length));
    password += lowercaseLetters.charAt(Math.floor(Math.random() * lowercaseLetters.length));
    password += numbers.charAt(Math.floor(Math.random() * numbers.length));
    password += specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length));

    const remainingLength = length - 4;
    for (let i = 0; i < remainingLength; i++) {
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters.charAt(randomIndex);
    }
    return password
}
// console.log(generatePassword(6));

// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

function romanToInteger(roman) {
    const romanNumerals = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
  
    let result = 0;
    let prevValue = 0;
  
    for (let i = roman.length - 1; i >= 0; i--) {
      const currentChar = roman[i];
      const currentValue = romanNumerals[currentChar];
  
      if (currentValue < prevValue) {
        result -= currentValue;
      } else {
        result += currentValue;
      }
  
      prevValue = currentValue;
    }
  
    return result;
  }  
  
  console.log(romanToInteger("IX"));   

// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

function findSecondSmallest(arr) {
    if (arr.length < 2) {
      throw new Error("Array must have at least two elements.");
    }
  
    let smallest = Infinity;
    let secondSmallest = Infinity;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < smallest) {
        secondSmallest = smallest;
        smallest = arr[i];
      } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
        secondSmallest = arr[i];
      }
    }
  
    if (secondSmallest === Infinity) {
      throw new Error("All elements in the array are the same.");
    }
  
    return secondSmallest;
  }  

  const result = [3, 1, 4, 1, 5, 9, 2, 6, 5];
  console.log(findSecondSmallest(result)); 
  