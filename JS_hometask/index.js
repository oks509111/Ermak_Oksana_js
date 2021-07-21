"use strict";
 //1
function hello1 (){
  let text = "Привет, JavaScript!";
  return text;
}
console.log(hello1());
//////////////////////////////////////////////////////////////////////////////////////////

//2
function hello2 (name = 'Вася') {

  if (name) {
    console.log ('Привет, ' + name);
  } else {
    console.log('Привет, гость!');
  }
}
hello2();

//3
function mul(n, m){

if ( n != '' && m != '' && typeof n === "number" && typeof n === "number") {
  return m * n;
} else {
  console.log("Error")
}
}
mul(2,4);

//4
function repeat(str = '', n = 2) {
  
  return str.repeat(n);
}
repeat();


//5
function rgb(a,b,c) {

return `rgb(${a ? a : 0}, ${b ? b : 0}, ${c ? c : 0})`;
}
console.log (rgb(23,100,134));


//6 мне кажется очень сложно :I
function avg() {
   
  let args = [... arguments];
  let isOk = args[0].every(a => {
    return typeof a === "number"
  });
if(!isOk) {
  return "Error";
}
  return args[0].reduce((a, b) => (a + b)) / args[0].length;
   
}

let result = avg([3, 5]);
console.log(result);


//7
function words(n) {
  n = !n ? 0 : n;
  let num = n % 10;
  console.log (num);
  let result = "";
  if (num > 1 && num < 5) {
    result = n + " " + "товара";
  } else if (n > 10 || n == 0) {
    result = n + " " + "товаров";
  }

   if (num == 1) {
    result = n + " " + "товар";
  } 

  console.log (result);
}
words(25);

//8

function ur2(a, b, c) { 
  let d = b*b - 4*a*c; 
  let x1 = 0; 
  let x2 = 0; 
  if (d > 0) { 
      x1 = (-b + Math.sqrt(d)) / 2*a; 
      x2 = (-b - Math.sqrt(d)) / 2*a; 
      console.log("x1 =" + x1 + "; x2 = " + x2); 
  } else if (d === 0) { 
      x1 = -b / (2*a); 
      console.log("x =" + x1); 
  } else { 
      console.log("нет решений"); 
  } 
} 
//ax2 + bx + c = 0; 
ur2(1,4,1); 
let f = x => x === undefined ? 0 : 1; 
console.log(f()); 

//10 первый вариант я пробовала передавать сум аргументов через for in что-то сделала сама не знаю что :I
let sum = object => { 
  let result = 0; 
  for (let property in object) { 
      result += object[property]; 
  } 
  return result; 
} 
console.log(sum({a: 4, b: 9})); 


/// или
let sum = (a,b) => a + b;
console.log (sum(4,9));

/*let sum = function (a,b) {
  return a + b
}
console.log(sum(4,9));*/



//11
let sortAscending = array => { 
  array.sort((a, b) => a - b); 
  return array.indexOf(6); 
} 

const array = [1, 2, 56, 28, 90, 5, 6]; 
console.log(sortAscending(array)); 

//12

let splitUsers = array => {
  let minors = array.filter(a => a.age < 18).sort((a,b) => b.age - a.age);
  let adults = array.filter(a => a.age >= 18).sort((a,b) => b.age - a.age);
  console.log(minors);
  console.log(adults);
}

let removeMinors = array => {
  console.log("before deletion");
  console.log(array);
  array.forEach(function (item, i, array) {

      if (item.age < 18) {
          array.splice(i, 1);
      }
  })
  console.log("after deletion");
  console.log(array);
}
let items = [{name: 'Ivan', age: 18}, {name: 'Petr', age: 12}, {name: 'Sidor', age: 25}, {name: 'Pavel', age: 24}, {name: 'Sasha', age: 29}]

splitUsers(items);
removeMinors(items);
let modifyArray = array => {

  console.log("leng = " + array.length);
  console.log(array);
  array.push(4);
  let leng = array.length;
  console.log("leng = " + leng);
  console.log(array);
  array.unshift(array[array.length - 1]);
  console.log(array);
}

///////////////////////////////////////////////////////////////////////////////////////////
let arr = [1, 10, 25, 67, 87, 56];

let leng = arr.push(4);
console.log(arr);

console.log(leng);

let changeElement = arr.pop();

arr.unshift(changeElement);
console.log(arr);

//
let arr1 = [2, 5, 90, 4]
let arr2 = arr.concat(arr1);
console.log (arr2);

//
arr2.indexOf(90);  
arr2.splice(9, 1, 19, 2, 91);
console.log(arr2);

//
let arr3 = arr2.slice(-4);
console.log(arr3);

arr3.sort(function (a, b){
  return a - b
});
console.log(arr3);

//

arr2.sort (function (b,a){
  return b - a 
});

console.log(arr2);

let total = arr2.reduce(function(a,b){
  return a + b
});
console.log(total);

/////////////////////////////////////////////////////////////////////////////////////////
let users = [
  {id: 1, name: "Вася", age: 20},
  {id: 2, name: "Петя", age: 19},
  {id: 3, name: "Маша", age: 18}
];

let modifyUsers = users => {
  let user = {id: 4, name: "Дима", age: 17};
  users.push(user);
  console.log(users);
  users.reverse();
  console.log(users);
  let sum = 0;
  users.forEach(item => {
      if (item.name === "Петя") {
          console.log(item.age);
      }
      sum += item.age;
  })
  console.log(sum);
}
modifyUsers(users);

let createUniqueArray = array => {
  let arrUnique = array.reduce((a, b) => {
     if (a.indexOf(b) < 0) {
         a.push(b);
     }
     return a;
  }, []);
  console.log(arrUnique);
}


