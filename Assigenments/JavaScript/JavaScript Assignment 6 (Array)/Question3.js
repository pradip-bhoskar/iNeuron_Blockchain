/*
    Github: https://github.com/pradip-bhoskar/iNeuron_Blockchain
    JavaScript Assignment 6
    Question 2: 
    Write a JavaScript program which accept a number as input in the function parameter 
    and insert dashes (-) between each two even numbers.
        For example: 
        if you accept 025468 as the output should be 0-254-6-8.
        computeDash(025468) -> 0-254-6-8.

 */

function computeDash(num){

    let str= num.toString();
    let arr = [str[0]];

    for(var i=1; i<str.length; i++){
        if(str[i-1]%2===0 && str[i]%2===0){
            arr.push('-');
            arr.push(str[i]);
        }
        else{
            arr.push(str[i])
        }
    }
    console.log(arr.join(''));
    return arr.join('');
}

computeDash(445245524685828);