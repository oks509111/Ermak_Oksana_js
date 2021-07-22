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

//2,3

 let cleanRoom = (dirtyLevel = 0) => { 
 
    return new Promise((resolve, reject) => { 
 
        let time = dirtyLevel * 1000; 
        setTimeout(() => { 
            if (dirtyLevel < 0 || dirtyLevel > 10) { 
                reject(`Значение параметра может быть от 0 до 10`); 
            } else { 
                resolve(time / 1000); 
            } 
        }, time); 
    }); 
} 
 
cleanRoom(3) 
    .then(result => { 
        console.log(`Уборка проведена успешно за ${result} секунд`); 
    }) 
    .catch(err => { 
        console.log(err); 
    });