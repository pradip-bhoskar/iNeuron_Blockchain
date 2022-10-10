/*
    Github: https://github.com/pradip-bhoskar

    JavaScript Assignment 7

    Question 1: 
        Give a correct verdict to users input if he enters "yes", "YES","Yes" ,etc (any combination) using string methods.
        How will you handle that ?
 */

// Answer: I will convert all inputs either into lowercase or uppercase.
// lowercase---->  toLowerCase()
// uppercase----> toUpperCase()

let s= 'yes Yes YeS yeS nO NO No no';
 s= s.toLowerCase();
 console.log(s);

 s=s.toUpperCase();
 console.log(s);

