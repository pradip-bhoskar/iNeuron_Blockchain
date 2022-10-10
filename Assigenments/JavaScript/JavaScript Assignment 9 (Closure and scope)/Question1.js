/*
Github: https://github.com/pradip-bhoskar/iNeuron_Blockchain
    JavaScript Assignment 9
    Question 1: 
         Carefully observe this example.
    a) Is the InnerFunction() a closure ?
    b) What is output of this program

        function OuterFunction() {
            var outerVariable = 100;
            function InnerFunction() {
                alert(outerVariable);
            }
            return InnerFunction;
        }
        var innerFunc = OuterFunction();
        innerFunc();
*/

//  A closure is an inner function which has access to the outer function scope.
// Here, InnerFunction() has the access to the outer function scope. So it is closure function.

function OuterFunction() {
    var outerVariable = 100;
    function InnerFunction() {
        console.log(outerVariable);
    }
    return InnerFunction;
}
var innerFunc = OuterFunction();
innerFunc();

//Output: 100