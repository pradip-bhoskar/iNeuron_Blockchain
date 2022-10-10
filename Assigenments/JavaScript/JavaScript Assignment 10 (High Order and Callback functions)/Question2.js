/*
Github: https://github.com/pradip-bhoskar/iNeuron_Blockchain
    JavaScript Assignment 10
    Question 2:
        Is filter a Higher Order function in Javascript ? If yes, why ?
*/

/*
    Answer:
        filter() function is a higher order function in javascript.
        
        because this function 
        takes an argument function,
        It also returns a new array consisting of only those elements that satisfied the condition of the arg_function. 

        Example:
*/

let data =[24, 33, 16, 40];

function func() {
    var arr= data.filter(canVote);
    console.log(arr)
}

function canVote(age) {
    return age >= 18;
}

func();
