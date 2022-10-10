/*
    Github: https://github.com/pradip-bhoskar

    JavaScript Assignment 7

    Question 6: 
        What string method can be used to check the occurrence of a specified text in a string?
 */

/*
    Answer:
        To check occurrence of specified text in sting we can use:
            1) match() method 
            2) split() method
            3) indexOf() method
*/

//using match() method


let s = "check occurrence of specified text in sting we can use";
let count= (s.match(/e/g)).length;                                          //(s.match(/text/g)).length;
console.log(count);