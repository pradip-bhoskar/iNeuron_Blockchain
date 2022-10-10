/*
Github: https://github.com/pradip-bhoskar/iNeuron_Blockchain
    JavaScript Assignment 10
    Question 1:
        Are Higher Order functions and Call back functions the same ? 
        If not, briefly explain about both functions.
*/

/*
    Answer:
    -------
        Higher order functions and Callback functions are different.

        Higher order functions:
        -----------------------
         A higher-order function is a function that takes another function(s) as an argument(s) 
         and/or returns a function to its callers.

        Callback functions:
        -------------------
        A callback function is a function that is passed to another function with the expectation 
        that the other function will call it.


        These functions are used to reuse code and optimize it.

        Example:
        ------

*/

const data = [25, 7, 15];
                                                                    //Higher Order Function
function smartOperation(data, operation, value) {
 
    value = isNaN(value) ? 0 : value;

    let result = [];
    for (const elem of data) {
        result.push(operation(elem, value));
    }50
    return result;
}

// Increment the number by another number           //callback function
function incr(num, value) {
    return num + value;
}

// Decrement the number by another number             //callback function
function decr(num, value) {
    return num - value;
}

const result1 = smartOperation(data, incr, 5);

const result2 = smartOperation(data, decr, 5);
console.log(result1);
console.log(result2);


