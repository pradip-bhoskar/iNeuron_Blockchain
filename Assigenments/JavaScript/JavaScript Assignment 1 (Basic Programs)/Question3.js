/*
    Github: https://github.com/pradip-bhoskar/iNeuron_Blockchain
    JavaScript Assignment 1
    Question 3: 
        Write a program to find the factorial of a number.
 */

function factorial(num){
    for(var i= 2; i<=num; i++)
    {
        if(num%i==0)
        {
            console.log(i);
        }
    }
}

factorial(45);


