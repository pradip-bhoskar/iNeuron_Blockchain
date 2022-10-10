/*
    Github: https://github.com/pradip-bhoskar/iNeuron_Blockchain
    JavaScript Assignment 2
    Question 3: 
        Write a program to find the factorial of all prime numbers between a given range . 
        Range will be passed as 2 values in the function parameters. 
            eg- if it is needed to find the values for numbers 1-100, 
            then function declaration can look like - function prime(1,100).
 */

    function factorial(num){
        var arr=[];
        for(var i= 1; i<=num; i++)
        {
            if(num%i==0)
            {
                arr.push(i);
            }
        }
        return arr;
    }

    function checkPrime(num){
        let flag=true;
         for(var i=2;i<num;i++)
         {
            if(num%i==0){
                flag=false;
                break;
            }
         }
         return flag;
    }

    function prime(x,y){
        let flag;
        for(var i=x;i<=y;i++){
            flag= checkPrime(i);
            if(flag){
                console.log(`Factoricals of ${i} are ${factorial(i)}`);
            }
        }
    }

    prime(45,66);