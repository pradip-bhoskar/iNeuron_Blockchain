/*
    Github: https://github.com/pradip-bhoskar

    JavaScript Assignment 7

    Question 4: 
        Input a String S with a word, and replace character “a” with “x” and
        display the result -
        Input: “apple” 
        Output: “xpple”
 */

let s= "apple";

function replaceLetter(yourString){

    result = yourString.replace(/a/g,'x');
    console.log(result);
}

replaceLetter(s);
replaceLetter("Hey I am pradip bhoskar")