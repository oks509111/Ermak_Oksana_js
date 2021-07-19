"use strict";

//1
let user = {name: "Ivan", years: 19, car: "Subaru", telePhone: "iPhone", city: "Minsk"};

let { name: userName, years: userYear, car: userCar, ...userOtherInfo } = user;

console.log(userName);
console.log(userYear);
console.log(userCar);
console.log(userOtherInfo);