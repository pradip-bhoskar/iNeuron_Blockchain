/*
    Github: https://github.com/pradip-bhoskar

    JavaScript Assignment 7

    Question 3: 
       Input a String S with two words, and replace first word with second word
       and display the result -
            Input: “Hii Boy” 
            Output: “Boy Hii”
 */

    let s= "Hii Boy";

    function alterFirstSecond(s){

        let myArray = s.split(" ");         //convert into array

        let temp;
        temp=myArray[0];
        myArray[0]=myArray[1];
        myArray[1]= temp;

        s=myArray.join(' ');                //convert into string
        console.log(s);
    }

    alterFirstSecond(s);
    alterFirstSecond("firsrt second third fourth fifth")
            