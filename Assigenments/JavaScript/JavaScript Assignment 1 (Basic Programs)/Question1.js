/*
    Github: https://github.com/pradip-bhoskar/iNeuron_Blockchain
    JavaScript Assignment 1
    Question 1: 
        Write a program to find whether a given year is a leap year or not.
 */

    let year = 1900;
    function checkLeap(year) {
        if ((year % 400 == 0 || year % 100 != 0) && year % 4 == 0) {
            console.log(`${year} is leap year...`);
        }
        else {
            console.log(`${year} is not leap year...`)
        }
    }

    checkLeap(year);
    checkLeap(2000);
    checkLeap(2016);
    checkLeap(2022);


