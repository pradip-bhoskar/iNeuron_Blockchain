/*
Github: https://github.com/pradip-bhoskar/iNeuron_Blockchain
    JavaScript Assignment 11
    Question 4:
        Write a JavaScript program to take an array as input from the user and:
            a) Store all duplicate elements in a separate array
            b) Remove the duplicate elements from the original array
                Sample Input:
                [ 1, 2, 3, 2, 3, 4, 5 ]
                Output:
                Duplicate Elements = [ 2, 3 ]
                Array without duplicate elements = [ 1, 2, 3, 4, 5 ]
*/

function duplicateArray(arr) {

    let dupArr = arr.filter((ele, index) => { return index !== arr.indexOf(ele) });
    let uniqueArr = Array.from(new Set(arr));
    console.log("Duplicate Elements = " + dupArr);
    console.log("Array without duplicate Elements = " + uniqueArr);
}

let arr = [1, 2, 3, 2, 3, 4, 5];
duplicateArray(arr);

