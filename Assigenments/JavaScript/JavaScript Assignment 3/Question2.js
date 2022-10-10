/*
    Github: https://github.com/pradip-bhoskar/iNeuron_Blockchain
    JavaScript Assignment 3
    Question 2: 
        Write a program to find whether a given number is armstrong number or not-
            The Armstrong number is a number that is equal to the sum of cubes of its digits. 
            For example 0, 1, 153, 370, 371 and 407 are the Armstrong numbers. 
            Let's try to understand why 153 is an Armstrong number.
                153 = (1*1*1)+(5*5*5)+(3*3*3) where:
                (1*1*1)=1
                (5*5*5)=125
                (3*3*3)=27
                So:
                1+125+27=153
*/

function checkArmstrong(num) {
    let sum = 0;
    let temp = num;
    while (num > 0) {
        let last_digit = num % 10;
        num = num / 10;
        sum = sum + cube(last_digit);
        num = Math.trunc(num);
    }
    temp === sum ? console.log(temp + " is Armstrong Number") : console.log(temp + " is Not Armstrong Number")
}

function cube(x) {
    return x * x * x;
}

checkArmstrong(153);
checkArmstrong(150);