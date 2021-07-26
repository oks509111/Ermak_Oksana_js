"use strict";

//1 продолжение 4 задачи
const cleanRoom = (...levels) => { 
    const promises = levels.map((level) => new Promise((resolve, reject) => { 
        if (level < 0 || level > 10) { 
            reject("Значение параметра может быть от 0 до 10"); 
        } else { 
            setTimeout(() => { 
                resolve(level); 
            }, level * 1000) 
        } 
    })); 
 
    return Promise.all(promises); 
} 
 
cleanRoom(3, 1, 2) 
    .then(result => { 
        const printResult = (arr) => arr.map(r => console.log(`Уборка проведена успешно за ${r} секунд`)); 
        printResult(result); 
    }) 
    .catch(err => { 
        console.error(err); 
    });