/*
    Github: https://github.com/pradip-bhoskar/iNeuron_Blockchain
    JavaScript Assignment 3
    Question 1: 
        Using for loops, write a Javascript program to output the following pattern -
        1
        2 3
        4 5 6
        7 8 9 10
 */
let count = 0;
let string = "";
for (var i = 1; i <= 4; i++) {
    for (var j = 1; j <= i; j++) {
        count++;
        string = string + ` ${count}`;
    }
    string = string + "\n";
}
console.log(string);