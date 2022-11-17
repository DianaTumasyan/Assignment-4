// 1 point to find the factorial of the given number
function BringFactorial (num) {
    let result = num;
    let count = 1;
    while (count <num) {
        result = result * num;
        count ++; 
    }
    return result;
}

console.log (BringFactorial (5));

// 2 point to find gcd of two numbers 
function GCD(num1, num2) {
    let result = 0;
    //taking numbers from 1 
    let i = 1;
    while (i <= num1 && i<= num2) {
        if (num1 % i == 0 && num2 % i == 0){
            result = i;
            
        }
        i++;
    }
    return result;
}

console.log(GCD(15, 5));

// 3 point to find the lcm of two numbers 
const gcd = require('./gcd.js');

function LCM (num1, num2){
    let result = (num1 * num2) / gcd.GCD(num1, num2);
    return result
}

console.log(LCM(35, 5));


// 4 point to convert decimal number into its hexadecimal value 
function hexadecimal(num){
    let arr = ["A", "B", "C", "D", "E", "F"];
    let answer = "";

    while (num != 0){
        let rem = num % 16;
        if (rem < 10){
            answer = rem + answer;
        }else {
            answer = arr[rem - 10] + answer;
        }
        num = Math.floor(num / 16);
    }
    console.log(answer);
}

hexadecimal(176);

module.exports = {
    BringFactorial,
    GCD,
    LCM,
    hexadecimal
}