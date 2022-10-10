/*
    Github: https://github.com/pradip-bhoskar

    JavaScript Assignment 7

    Question 10: 
        Given a String S, achieve following tasks
            a) Convert the String into upper case.
            b) Convert only the first character to uppercase.
            c) Convert the String into lower case.
            d) Break the string into two halves and swap them.
            e) Count the repeating characters.
            f) Reverse the string
 */


let s= "gitHub is where over 83 million developers shape the future of software";

//upper case
    let result1= s.toUpperCase();
    console.log(result1);

// first character uppercase
    let first = s.toUpperCase()[0];
    //let result2= s.replace(/^./, s[0].toUpperCase());
    let result2 =s.charAt(0).toUpperCase()  + s.slice(1);
    console.log(result2);

//lower case
    let result3= s.toLowerCase();
    console.log(result3);

//break and swap
    let l = s.length;
    str1= s.slice(0,l/2);
    str2= s.slice(l/2,l);
    let result4= str2.concat(str1)
    console.log(result4);

//count repeating charactors
    let arr =s.split("");
    let count=0;
    let flag= true;
    for (var i= 0;i<=arr.length; i++){
        for(var j=i+1; j<=arr.length; j++){
            if(arr[i]==arr[j]){
                flag=true;
                for(var k=0; k<i; k++){
                    if(arr[i]==arr[k]){
                        flag=false;
                        break;
                    }
                }
                if(flag){
                    //console.log(arr[i])
                    count++;
                }
                break;
            }
        }
    }
    console.log("Repeating charactors: "+ count);

//reverse string
    let result6=s.split("").reverse().join("");
    console.log(result6);
    

