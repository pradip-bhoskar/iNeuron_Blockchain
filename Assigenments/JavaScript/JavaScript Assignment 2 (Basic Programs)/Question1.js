/*
    Github: https://github.com/pradip-bhoskar/iNeuron_Blockchain
    JavaScript Assignment 2
    Question 1: 
        Write a Javascript function to check whether a triangle is equilateral, isosceles or scalene
 */

    function triangle(a,b,c){
        if(a==b && b==c){
            console.log("Triangle is equilateral..");
        }
        else if(a==b || b==c || a==c){
            console.log("Triangle is isosceles..");
        }
        else{
            console.log("Triangle is scalene..");  
        }
    }

    triangle(20,20,25);
    triangle(15,20,25);
    triangle(20,20,20);