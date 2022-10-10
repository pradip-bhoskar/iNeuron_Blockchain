/*
    Github: https://github.com/pradip-bhoskar

    JavaScript Assignment 7

    Question 2: 
       Input a String S with multiple words, and remove whitespaces and
        output the result -
            Input: “Hii Boy” 
            Output: “HiiBoy”
 */


var S = "Hii Boy";

function removeSpaces(S){

    S= S.replace(/\s/g,"");                     //result = text.replace(/xyz/g, "red");    //g stands for globaly
    console.log(S);
}

removeSpaces(S);
removeSpaces("     Hey This Is       Removing All Spaces      ");