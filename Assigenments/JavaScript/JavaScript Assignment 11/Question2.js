/*
Github: https://github.com/pradip-bhoskar/iNeuron_Blockchain
    JavaScript Assignment 11
    Question 2:
        Write a JavaScript program to take 2 arrays from the user and check if the
        number 4 exists in any of the arrays, or both of the arrays.
        
            Sample Input 1:
            [ 1, 2, 3, 4, 5 ]
            [ 4, 6, 1, 8, 2 ]
            Output:
            4 in both arrays

            Sample Input 2:
            [ 1, 2, 3, 6, 5 ]
            [ 4, 6, 1, 8, 2 ]
            Output:
            4 in array 2

            Sample Input 3:
            [ 1, 2, 3, 4, 5 ]
            [ 5, 6, 1, 8, 2 ]
            Output:
            4 in array 1
*/

function checkElement(arr1, arr2) {
    switch (true) {
        case arr1.includes(4) && arr2.includes(4):
            console.log("4 in both arrays");
            break;
        case arr1.includes(4):
            console.log("4 in array 1");
            break;
        case arr2.includes(4):
            console.log("4 in array 2");
            break;
        default:
            console.log("4 is not present anywhere");
    }
}

checkElement([1, 2, 3, 4, 5], [4, 6, 1, 8, 2]);
checkElement([1, 2, 3, 6, 5], [4, 6, 1, 8, 2]);
checkElement([1, 2, 3, 4, 5], [5, 6, 1, 8, 2]);
checkElement([1, 2, 3, 8, 5], [5, 6, 1, 8, 2]);




