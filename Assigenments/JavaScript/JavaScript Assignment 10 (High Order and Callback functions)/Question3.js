/*
Github: https://github.com/pradip-bhoskar/iNeuron_Blockchain
    JavaScript Assignment 10
    Question 3:
        Give an example of a Higher Order function and a call back function used in the same program
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
