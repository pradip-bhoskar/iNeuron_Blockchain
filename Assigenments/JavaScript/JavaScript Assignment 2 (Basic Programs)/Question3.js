/*
    Github: https://github.com/pradip-bhoskar/iNeuron_Blockchain
    JavaScript Assignment 2
    Question 3: 
        Write a JavaScript program to find the sum of the multiples of 3 and 5 under 1000
 */

function sum (){
    total =0;
    for(var i=1; i<1000; i++)
    {
        if(i%3===0 || i%5===0)
        {
            total =total +i;
        }
    }
    console.log(total);
}

sum();