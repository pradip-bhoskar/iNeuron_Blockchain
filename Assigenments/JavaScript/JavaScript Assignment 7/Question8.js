/*
    Github: https://github.com/pradip-bhoskar

    JavaScript Assignment 7

    Question 8: 
        Write a Javascript function to test whether the first character of a string is lowercase.
 */


let string = "Hey user, check first charactor...";
function checkFirst(string){
    if(string.charCodeAt(0)>= 97 && string.charCodeAt(0)<=122)
    {
        console.log("First charactor is lowercase");
    }
    else{
        console.log("First charactor is not lowercase");

    }
}

checkFirst(string);
checkFirst("i love my village");
