/*
Github: https://github.com/pradip-bhoskar/iNeuron_Blockchain
    JavaScript Assignment 11
    Question 5:
        Debug the given JavaScript program and execute the correct code.

*/

function thirdLargest(arr, arr_size) {
    /* There should be
    at least three elements */
    if (arr_size < 3) {
        console.log(" Invalid Input ");
        return;
    }
    
    for (let i = 0; i < arr_size; i++) {
        for (let j = i+1; j < arr_size; j++) {
            if (arr[i] < arr[j]) {
                var temp =arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
    console.log("The third Largest " + "element is ", arr[2]);
    return arr[2];
}

let arr = [12, 13, 1, 10, 34, 16];
let n = arr.length;
thirdLargest(arr, n);


