/*
    Github: https://github.com/pradip-bhoskar/iNeuron_Blockchain
    JavaScript Assignment 2
    Question 2: 
        Write a function using switch case to find the grade of a student based on marks obtained
            a. “S grade” if the marks are between 90 and 100.
            b. “A grade” if the marks are between 80 and 90.
            c. “B grade” if the marks are between 70 and 80.
            d. “C grade” if the marks are between 60 and 70.
            e. “D grade” if the marks are between 50 and 60.
            f. “E grade” if the marks are between 40 and 50.
            g. “Student has failed” if the marks are between 0 and 40.
            h. Else output “Invalid marks”.
 */

 function checkGrade(marks){
    
    switch (true){
        case (marks<=100 && marks>=90):
            console.log("S grade");
            break;
        case (marks<90 && marks>=80):
            console.log("A grade");
            break;
        case (marks<80 && marks>=70):
            console.log("B grade");
            break;
        case (marks<70 && marks>=60):
            console.log("C grade");
            break;
        case (marks<60 && marks>=50):
            console.log("D grade");
            break;
        case (marks<50 && marks>=40):
            console.log("E grade");
            break;
        case (marks<40):
            console.log("Student has failed");
            break;
        default:
            console.log("Invalid marks");
            break;
    }
 }

 checkGrade(75);









 