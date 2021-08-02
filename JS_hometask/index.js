"use strict";

//1
function cleanRoom() {
    setTimeout(() => console.log("Команата убрана"), 5000);
}

function cleanRoom () {
return new Promise ((resolve, reject) => {
    setTimeout(() => 
      resolve ("Команата убрана"), 5000);
  });
}

cleanRoom().then (
    result => console.log (result),
    error => console.log (error)
);




//2,3

const cleanRoom = (dirtyLevel  = 0) => { 
 
    return new Promise((resolve, reject) => { 
 
        setTimeout(() => { 
            if (dirtyLevel < 0 || dirtyLevel > 10) { 
                reject(`Значение параметра может быть от 0 до 10`); 
            } else { 
                resolve(dirtyLevel); 
            } 
        }, dirtyLevel * 1000); 
      }); 
}
 
cleanRoom(3) 
    .then(result => { 
        console.log(`Уборка проведена успешно за ${result} секунд`); 
    }) 
    .catch(err => { 
        console.log(err); 
    });