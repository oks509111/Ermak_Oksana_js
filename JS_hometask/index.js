"use strict";


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


async function cleanRooms(dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) {
  try{
    const result1 = await cleanRoom(dirtyLevel_1);
    console.log(`Уборка комнаты 1 проведена успешно за ${result1} секунд`);

    const result2 = await cleanRoom(dirtyLevel_2);
    console.log(`Уборка комнаты 2 проведена успешно за ${result2} секунд`);

    const result3 = await cleanRoom(dirtyLevel_3);
    console.log(`Уборка комнаты 3 проведена успешно за ${result3} секунд`);

  }catch(err){
    console.log(err);
  }

}
 
  cleanRooms(7,3,9);
  
  

