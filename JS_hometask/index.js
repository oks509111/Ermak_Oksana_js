"use strict";

//1
let user = {name: "Ivan", years: 19, car: "Subaru", telePhone: "iPhone", city: "Minsk"};

let { name: userName, years: userYear, car: userCar, ...userOtherInfo } = user;

console.log(userName);
console.log(userYear);
console.log(userCar);
console.log(userOtherInfo);

//2

let arr = [1, "str", 24, { name: "Ivan" }, 89, "undeifined", "10"];

let [firstElement, secondElement, , , fifthElement, ...otherElements] = arr;

console.log(firstElement);
console.log(secondElement);
console.log(fifthElement);
console.log(otherElements);

//3

let arrays = [[1, 2, 3], [4, 5], [6]].reduce (function(a,b) {
    return a.concat(b);
})

console.log(arrays);

//4
class HouseBuilder {
    constructor(width, length, floоrs) {
    if (typeof width === "number" && typeof length === "number" &&  typeof floоrs === "number") {
        this.width = width;
        this.length = length;
        this.floоrs = floоrs;
    } else {
        console.log("Error");
    }
}
}

let firstHouse = new HouseBuilder("ghjfledf", 20, 5);
console.log(firstHouse);

let secondHouse = new HouseBuilder (300, 500,9);
console.log (secondHouse);

//5
class HouseBuilder {
   
    totalArea = 0;

    constructor(width, length, floоrs) {
        this.width = width;
        this.length = length;
        this.floоrs = floоrs;
        this.totalArea = this.calcArea();
    }

    calcArea() {
        return this.width * this.length * this.floоrs;
    }
}

let house3 = new HouseBuilder(300, 500,9);
console.log(house3.totalArea);
console.log(house3);