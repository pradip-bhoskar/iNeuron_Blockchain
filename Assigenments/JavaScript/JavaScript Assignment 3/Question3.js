/*
    Github: https://github.com/pradip-bhoskar/iNeuron_Blockchain
    JavaScript Assignment 3
    Question 3: 
        Write a program to find whether a given number is special number or not-
        If the sum of the factorial of digits of a number (N) is equal to the number itself, 
        the number (N) is called a special number.
        eg- 145 is a special number
        Logic- 1! + 4! + 5!= 1+24+120 i.e 14
*/

function checkSpecial(num) {
    let sum = 0;
    let temp = num;
    while (num > 0) {
        let last_digit = num % 10;
        num = num / 10;
        sum = sum + factorial(last_digit);
        num = Math.trunc(num);
    }
    temp === sum ? console.log(temp + " is special number") : console.log(temp + " is not special number")
}

function factorial(x) {
    let fact = 1;
    for (var i = 1; i <= x; i++) {
        fact = fact * i;
    }
    return fact;
}

checkSpecial(145);
checkSpecial(150);


