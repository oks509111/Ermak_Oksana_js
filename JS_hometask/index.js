"use strict";
//1
let array1 = [1, 2, 3, 4, 4, 5, 2, 9, 4];
let arrUnique = [...new Set([1, 2, 3, 4, 4, 5, 2, 9, 4])];
console.log(arrUnique);

// 

let array1 = [1, 2, 3, 4, 4, 5, 2, 9, 4];
let arrUnique =array1.filter((item, index) => array1.indexOf(item)===index);
console.log(arrUnique);
//
let array1 = [1, 2, 3, 4, 4, 5, 2, 9, 4];
let arrUnique = array1.reduce((unique, item)=>
unique.includes(item) ? unique : [... unique, item], []);
console.log(arrUnique);



//2
let makeAdultUsers = users => {
    let usersAfterYear = users.map(u => { u.age = u.age + 1; return u;}).filter(u => u.age >= 18);
    console.log(usersAfterYear);
    return usersAfterYear;
}
let users1 = [
    {id: 1, name: "Вася", age: 19},
    {id: 2, name: "Петя", age: 18},
    {id: 3, name: "Маша", age: 17},
    {id: 4, name: "Света", age: 18},
    {id: 5, name: "Наташа", age: 17},
    {id: 6, name: "Женя", age: 12},
    {id: 7, name: "Коля", age: 30},
    {id: 8, name: "Настя", age: 16},
    {id: 9, name: "Антон", age: 19},
    {id: 10, name: "Иван", age: 20},
    {id: 11, name: "Павел", age: 16},
    {id: 12, name: "Денис", age: 20}
];
let usersAfterYear = makeAdultUsers(users1);

//3
let createUniqueObjectArray = array => {
    let obj = {};

    for (let i = 0, len = array.length; i < len; i++) {
        obj[array[i]['age']] = array[i];
    }

    array = [];
    for (let key in obj) {
        array.push(obj[key]);
    }
    console.log(array);
    return array;
}

let usersAfterYearUniqueAge = createUniqueObjectArray(usersAfterYear);

//4
let fibonachi = n => {
    return n <= 1 ? n : fibonachi(n - 1) + fibonachi(n - 2);
}
console.log(fibonachi(8));

//5
let factorial = n => {
    return (n != 1) ? n * factorial(n - 1) : 1;
}
console.log(factorial(10));

//6
let func = () => {
    let currentCount = 1;
    return function() {
        return currentCount++;
    };
}
let counter = func();
console.log(counter());
console.log(counter());
console.log(counter());

//7
function User(first_name, second_name, age, city) {
    this.first_name = first_name;
    this.second_name = second_name;
    this.age = age;
    this.city = city;
}

let user1 = new User("Peter", "First", 33, "Saint-Petersburg");
let user2 = new User("Иван", "Иванов", 45, "Moscow");
console.log(user1);
console.log(user2);

//8
function fullInfo() {
    console.log(this);
}

user1.print = fullInfo;
user2.print = fullInfo;
user1.print();