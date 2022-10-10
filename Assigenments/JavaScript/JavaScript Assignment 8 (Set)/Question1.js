/*
    Github: https://github.com/pradip-bhoskar/iNeuron_Blockchain
    JavaScript Assignment 8
    Question 1: 
         Can we put duplicate values in the set object ?
 */

/*
    Answer:
        In javascript set store unique values of any type,wheather primitive values or object references.
        So we can not put duplicate values in the set object.
*/


//I have a question below:


/*declare a new set*/
var items = new Set()                               

/*add an array by declaring as array type*/
var arr = [1,2,3,4];
items.add(arr);

/*print items*/
console.log(items); // Set {[1, 2, 3, 4]}

/*add an array directly as argument*/
items.add([5,6,7,8]);

/*print items*/
console.log(items); // Set {[1, 2, 3, 4], [5, 6, 7, 8]}

/*print type of items stored in Set*/
for (let item of items) console.log(typeof item); //object, object

/*check if item has array we declared as array type*/
console.log(items.has(arr)); // true

/*Now, check if item has array we added through arguments*/
console.log(items.has([5,6,7,8])); //false

/*Now, add same array again via argument*/
items.add([1,2,3,4]);

/*Set has duplicate items*/
console.log(items); // Set {[1, 2, 3, 4], [5, 6, 7, 8], [1, 2, 3, 4]}


/*
    Why it is returning false at items.has([5,6,7,8])?
    Why it is allowing duplicate values? I thought "A set is in an ordered list of values that cannot contain duplicates"
    How to access array added by items.add([5,6,7,8])?

    I saw it on stackoverflow , but not satisfied.
*/