/*
    Github: https://github.com/pradip-bhoskar/iNeuron_Blockchain
    JavaScript Assignment 3

    Write a JavaScript program to get the volume of a Cylinder, Sphere and Cone with four decimal places using objects and classes.
    Create classes for volumes for each geometric shape which returns the output using the getVolume() method.

        eg- to get volume of cylinder-
        let obj= new Cylinder(radius,height);
        obj.getVolume();

        Formulas for volumes of the shapes-
        1) Cylinder- Volume = πrrh
            where r is the radius and h is the height of the cylinder.
        2)Sphere- Volume= 4/3πrrr
             where r is the radius
        3) Cone- Volume= πrrh/3
             where r is the radius and h is the height of the cone.
*/

class Shape {
    constructor(radius, height) {
        this.radius=radius;
        this.height=height;
        this.pi=Math.PI;
    }
}

class Cylinder extends Shape {
    constructor(radius, height) {
       super(radius,height);
    }

    getVolume(radius, height) {
        return this.pi*this.radius*this.radius*this.height;
    }
}

class Sphere extends Shape {
    constructor(radius, height) {
        super(radius,height);
     }

    getVolume(radius, height) {
        return (4/3)*this.pi*this.radius*this.radius*this.radius;
    }
}

class Cone extends Shape {
    constructor(radius, height) {
        super(radius,height);
     }

    getVolume(radius, height) {
        return this.pi*this.radius*this.radius*this.height/3;
    }
}

let cylinderVol = new Cylinder(5, 6);
let sphereVol = new Sphere(5, 6);
let coneVol = new Cone(5, 6);

console.log("Volume of Cylinder " + cylinderVol.getVolume());
console.log("Volume of Sphere " + sphereVol.getVolume());
console.log("Volume of Cone " + coneVol.getVolume());







