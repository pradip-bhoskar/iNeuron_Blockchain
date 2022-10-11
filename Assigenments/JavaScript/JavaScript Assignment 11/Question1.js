/*
Github: https://github.com/pradip-bhoskar/iNeuron_Blockchain
    JavaScript Assignment 11
    Question 1:
        Write a JavaScript program to take an array as input from the user and 
        calculate the sum of numbers in odd places and the sum of numbers at even places.
            a) Print the difference between the two sums
            b) Print the number of elements in odd places
            c) Print the number of elements in even places
            d) Print the average of all elements in the array
            e) Print GCD of Sum of Numbers at Odd Places and Sum of Numbers at Even Places
                Sample Input:
                [ 1, 2, 3, 4, 5 ]
                    Explanation:
                    Sum of Numbers at Odd Places = 1 + 3 + 5 = 9
                    Sum of Numbers at Even Places = 2 + 4 = 6
                    Difference = 9 - 6 = 3
                Sample Output:
                    Difference = 3
                    Odd Elements = 3
                    Even Elements = 2
                    Average = 3
                    GCD = 3
*/

let data = [1, 2, 3, 4, 5];

function Operation(data) {

    var oddArr = data.filter(function (num, index) { return index % 2 === 0 });                //filter method returns array
    var evenArr = data.filter((num, index) => { return index % 2 === 1 });
    var oddSum = oddArr.reduce((sum, currentEle) => { return sum + currentEle });              //reduce method returns single element
    var evenSum = evenArr.reduce((sum, currentEle) => { return sum + currentEle });

    console.log("Difference = " + Math.abs(oddSum - evenSum));
    console.log("Odd Elements = " + oddArr.length);
    console.log("Even Elements = " + evenArr.length);
    console.log("Average = " + (oddSum + evenSum) / (oddArr.length + evenArr.length));
    console.log("GCD = " + calcGCD(oddSum, evenSum));
}

function calcGCD(a, b) {
    if (!b) {
        return a;
    }
    return calcGCD(b, a % b);
}

Operation(data);


