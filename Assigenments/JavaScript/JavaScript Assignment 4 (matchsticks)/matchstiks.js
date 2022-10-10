/*
    Github: https://github.com/pradip-bhoskar/iNeuron_Blockchain
    JavaScript Assignment 4

    Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. 
    See step 1, 2 and 3 in the image above.
    Take input from the user in the function parameter and return the output using the return statement.
        examples-
        matchHouses(1) ➞ 6
        matchHouses(4) ➞ 21
        matchHouses(87) ➞ 436
*/

function matchHouses(num){
    return (num*5)+1;
}

console.log(matchHouses(87));