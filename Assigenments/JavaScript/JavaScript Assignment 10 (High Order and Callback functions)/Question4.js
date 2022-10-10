/*
Github: https://github.com/pradip-bhoskar/iNeuron_Blockchain
    JavaScript Assignment 10
    Question 1:
        Carefully check the example below:
            a) What will be the output of this program ?
            b) Which function is a Higher Order function here ?

*/

const names = ['John', 'Tina', 'Kale', 'Max']
function useFunction(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        fn(arr[i]);
    }
}
function argFn(name) {
    console.log("Hello " + name);
}
useFunction(names, argFn);


/*
    Output:
        Hello John
        Hello Tina
        Hello Kale
        Hello Max
*/

//Here useFunction() is higher order function because it takes fn as an argument which is function.



