"use strict";

//1
function cleanRoom() {
    setTimeout(() => console.log("Команата убрана"), 5000);
}

let cleanRoom = new Promise (function(resolve, reject){
    setTimeout(() => resolve (console.log("Команата убрана")), 1000);
});

cleanRoom.then (
    result => console.log (result),
    error => console.log (error)
);

//2

