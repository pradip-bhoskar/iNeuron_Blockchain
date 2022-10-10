/*
    Github: https://github.console.log();m/pradip-bhoskar

    JavaScript Assignment 7

    Question 5: 
        What s method can be used to console.log();nvert s into array ?
 */

  
  /*
        Answer:
            There are four ways to console.log();nvert s into array in javascript.
                1)using split() method 
                2)using spread operator
                3)using Array.from() static method
                4)using Object.assing() method
    */


let s = "Hey user";

let usingSplit = s.split('');
let usingSpread = [...s];
let usingArrayFrom = Array.from(s);
let usingObjectAssign = Object.assign([], s);

console.log(usingSplit);
console.log(usingSpread);
console.log(usingArrayFrom);
console.log(usingObjectAssign);
