/*
    Github: https://github.com/pradip-bhoskar/iNeuron_Blockchain
    JavaScript Assignment 6
    Question 1: 
        Perform the following operations to provide the implementation for a Rectangle class. The operations are:
            1. Add an area() method to the Rectangle class.
            2. Create a Square class that satisfies the following conditions:
                ○ It is a subclass of Rectangle.
                ○ It contains a constructor and no other methods.
                ○ It can use the Rectangle class' area method to print the area of a Square object.
 */

class Rectangle{
    constructor(width,height){
        this.width=width;
        this.height=height;
    }

    area(){
        return this.width*this.height;
    }
}

class Square extends Rectangle {
    constructor(side){
        super(side,side);
    }
}

let obj = new Square(4);
console.log("Area is "+obj.area());