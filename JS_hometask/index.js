"use strict";
 //1
function hello1 (){
  let text = "Привет, JavaScript!";
  return text;
}
console.log( hello1() );

//2
function hello2 (name) {

  if (!name) {
    console.log('Привет, гость!');
  } else {
    console.log('Привет, ' + name);
  }
  //name ? console.log ('Привет, ' + name) : console.log('Привет, гость!');
}
hello2("Вася");

//3
function mul(n, m){
  return m * n;
}
console.log (mul(2,4));

//4
function repeat(string, n) {
  n = !n ? 2 : n;  
  string = !string ? "" : string;  
  let text = ""; 
  for (let i = 0; i < n; i++) { 
    text = text + string;
  }
  return text;
}
console.log (repeat("привет", 4));


//5
function rgb(a,b,c) {

a = !a ? 0 : a;
b = !b ? 0 : b;
c = !c ? 0 : c;

return "rgb(" + a + ", " + b + ", " + c + ")";
}
console.log (rgb(23,100,134));

//6
function avg() {

 let sum = 0;
    for (i=0; i < arguments.length; i++) {
        sum += arguments[i];
    }
  console.log (sum / arguments.length);
}
let numbers = [3, 2, 4];
avg.apply(this, numbers);



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

unction ur2(a, b, c) { 
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

//10
let sum = object => { 
  let result = 0; 
  for (const property in object) { 
      result += object[property]; 
  } 
  return result; 
} 
console.log(sum({a: 4, b: 9})); 


//11
let sortAscending = array => { 
  array.sort((a, b) => a - b); 
  return array.indexOf(6); 
} 

const array = [1, 2, 56, 28, 90, 5, 6]; 
console.log(sortAscending(array)); 

//12 пока я максимально запуталась нужно время на подумать
let splitUsers = array => { 
  let minors = array.filter(a => a.age < 18).sort((a,b) => b.age - a.age); 
  let adults = array.filter(a => a.age >= 18).sort((a,b) => b.age - a.age); 
  console.log(minors); 
  console.log(adults); 
} 

let removeMinors = array => { 

  for (const object in array) { 
      console.log("df"); 
      console.log(property); 
      if (property < 18) { 
          array.splice(array.indexOf(property), 1); 
      } 
  } 
} 


let items = [{name: 'Ivan', age: 18}, {name: 'Petr', age: 12}, {name: 'Sidor', age: 25}, {name: 'Pavel', age: 24}, {name: 'Sasha', age: 29}] 
splitUsers(items); 
//removeMinors(items);
