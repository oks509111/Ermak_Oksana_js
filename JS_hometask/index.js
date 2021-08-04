"use strict";


//1 продолжение 4 задачи
/*const cleanRoom = (...levels) => { 
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
} */

const cleanRooms = (dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) => { 
    cleanRoom(dirtyLevel_1) 
        .then((result) => { 
            console.log(`Уборка комнаты 1 проведена успешно за ${result} секунд`); 
            return cleanRoom(dirtyLevel_2); 
        }) 
        .then((result) => { 
            console.log(`Уборка комнаты 2 проведена успешно за ${result} секунд`); 
            return cleanRoom(dirtyLevel_3); 
        }) 
        .then((result) => { 
            console.log(`Уборка комнаты 3 проведена успешно за ${result} секунд`); 
        }) 
        
        .catch(err => { 
            console.log(err); 
        }); 
} 
 
cleanRooms(3, 5, 7);

const cleanRoomsParal = (dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) => { 
    return Promise.all([cleanRoom(dirtyLevel_1), cleanRoom(dirtyLevel_2), cleanRoom(dirtyLevel_3)]) 
        .then(r => console.log(`Уборка комнат выполнена за ${r} секунд`)); 
}

/*cleanRoom(3, 1, 2) 
    .then(result => { 
        const printResult = (arr) => arr.map(r => console.log(`Уборка проведена успешно за ${r} секунд`)); 
        printResult(result); 
    }) 
    .catch(err => { 
        console.error(err); 
    });*/