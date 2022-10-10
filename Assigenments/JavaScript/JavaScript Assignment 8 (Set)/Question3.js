
/*
    Github: https://github.com/pradip-bhoskar/iNeuron_Blockchain
    JavaScript Assignment 8
    Question 3: 
         Create a set object with four random numbers from 0 to 10. 
         Check if this newly created set object has 8 in it. Use set object methods.
 */

    const mySet = new Set();

    while(mySet.size<4){
        mySet.add(Math.trunc(Math.random()*10));
    }
    
    (mySet.has(8))?console.log("number 8 is presesnt in set"):console.log("number 8 is not presesnt in set");
    console.log(mySet);