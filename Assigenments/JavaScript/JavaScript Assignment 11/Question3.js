/*
Github: https://github.com/pradip-bhoskar/iNeuron_Blockchain
    JavaScript Assignment 11
    Question 3:
        Write a JavaScript program to flatten the array, ie, turns a deep array into a plain array.
            Note: Do not use array.flat();
            Sample Input:
            [ 1, 2, [ 3, 4, [ 5 ] ] ]
            Output:
            [ 1, 2, 3, 4, 5 ]
*/

function flatArr(arr) {
    var myArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            myArr = myArr.concat(flatArr(arr[i]));
        } else {
            myArr.push(arr[i]);
        }
    }
    return myArr;
}

let arr = [1, 2, [3, 4, [5]]];
console.log(flatArr(arr));


