/*
    Github: https://github.com/pradip-bhoskar

    JavaScript Assignment 7

    Question 1: 
        Input a String S, and check its length and if the length is greater than 4,
        truncate the input String and output the result -

            Input: Ice Output: Ice
            Input:Icecream Output:Icec...
 */



let S = "Icecreame";

function checkOutput(S){

    if(S.length>4){
        //S= S.slice(0,4);              // gives sting between two index
        //S=S.substring(0,4);           // same as slice() but does not gives last charactor
        S= S.substr(0,4);               ////returns string from given index for given number of charactors
        console.log(S);
    }
    else{
        console.log(S);
    }
}

checkOutput("xyz");
checkOutput(S);
checkOutput("Pradip Bhoskar");
