function GCD (num1, num2) {
    let result = "";
    //taking numbers from 1 
    let i = 1;
    while (i <= num1 && i<= num2) {
        if (num1 % i == 0 && num2 % i == 0){
            result = i;
            
        }
        i ++;
    }
    return result;
}

console.log(GCD (15, 5));