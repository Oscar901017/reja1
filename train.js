
console.log("train task ishga tushdi!");

/*
// console.log("Jack Ma maslahatlari");
// const list = [
//     "yaxshi talaba buling", // 0-20
//     "tugri boshliq tanlang va kuproq xato qiling", //20-30
//     "uzingiz ishlashni boshlang", //30-40
//     "siz kuchli bulgan narsalarni qiling", //40-50
//     "yoshlarga investitsiya qiling", // 50-60
//     "endi dam oling, foydasi yoq endi", //60
// ];

//CALLBACK functon

// function maslahatBering(a, callback) {
//     if(typeof a !== 'number') callback("insert a number", null);
//     else if(a <= 20) callback(null, list[0]);
//     else if(a>20 && a<=30) callback(null, list[1]);
//     else if(a>30 && a<=40) callback(null, list[2]);
//     else if(a>40 && a<=50) callback(null, list[3]);
//     else if(a>50 && a<=60) callback(null, list[4]);
//     else {
//         setTimeout(function () {

//       callback(null, list[5]);
//     },5000);
//     }
// }

// console.log('passed here 0');
// maslahatBering(65, (err, data) => {
//     if(err) console.log('EROR:', err);
//     else {
//         console.log('Javob:',data);
// }
// });
// console.log('passed here 1');


// console.log("Jack Ma maslahatlari");
// const list = [
//     "yaxshi talaba buling", // 0-20
//     "tugri boshliq tanlang va kuproq xato qiling", //20-30
//     "uzingiz ishlashni boshlang", //30-40
//     "siz kuchli bulgan narsalarni qiling", //40-50
//     "yoshlarga investitsiya qiling", // 50-60
//     "endi dam oling, foydasi yoq endi", //60
// ];

// // ASYNC function
// async function maslahatBering(a) {
//     if(typeof a !== 'number') throw new Error("insert a number");
//     else if(a <= 20) return list[0];
//     else if(a>20 && a<=30) return list[1];
//     else if(a>30 && a<=40) return list[2];
//     else if(a>40 && a<=50) return list[3];
//     else if(a>50 && a<=60) return list[4];
//     else {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(list[5]);
//             }, 5000);
//         });
//     }

    

    //     setTimeout(function () {

    //   return  list[5];
    // },5000);
    // }
//}

// // then catch 
// console.log('passed here 0');
// maslahatBering(25)
// .then(data => {
// console.log("javob:",data);

// })
// .catch(err => {
//     console.log("ERROR:", err);

// });
// console.log("passed herhe 1");
//}

// async/ await
// async function run() {
//   let javob = await maslahatBering(25);
//   console.log(javob);
//   javob = await maslahatBering(70);
//   console.log(javob);
//   javob = await maslahatBering(41);
//   console.log(javob);
// }
// run(); 
*/

/*// A-TASK: 

// Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
// MASALAN countLetter("e", "engineer") 3ni return qiladi.

// function countLetter(letter, word) {
//     let count = 0;
    
//     for (let i = 0; i < word.length; i++) {
//         if (word[i] === letter) {
//             count++;
//         }
//     }

//     return count;
// }
// console.log(countLetter("e", "engineer"));  
*/

// B-Task

// function countDigits(soz) {
//     let javob = 0;
//     for (const i of soz) {
//         if (!isNaN(i)) {
//             javob += 1;
//         }
//     }
//     return javob;
// }

// console.log(countDigits("ad2a54y79wet0sfgb9"));




// MITASK-C

// class Shop {
 
//     constructor(non, lagmon, cola) {
//         this.non = non;
//         this.lagmon = lagmon;
//         this.cola = cola;
//     }

    
//     qoldiq() {
//         const currentTime = new Date().toLocaleTimeString(); // Hozirgi vaqtni olish
//         console.log(`Hozir ${currentTime}da ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.cola}ta cola mavjud!`);
//     }

    
//     sotish(mahsulot, miqdor) {
//         if (mahsulot === 'non') {
//             if (this.non >= miqdor) {
//                 this.non -= miqdor;
//                 this.logAction('sotish', mahsulot, miqdor);
//             } else {
//                 console.log('Yetarli non yo\'q!');
//             }
//         } else if (mahsulot === 'lagmon') {
//             if (this.lagmon >= miqdor) {
//                 this.lagmon -= miqdor;
//                 this.logAction('sotish', mahsulot, miqdor);
//             } else {
//                 console.log('Yetarli lagmon yo\'q!');
//             }
//         } else if (mahsulot === 'cola') {
//             if (this.cola >= miqdor) {
//                 this.cola -= miqdor;
//                 this.logAction('sotish', mahsulot, miqdor);
//             } else {
//                 console.log('Yetarli cola yo\'q!');
//             }
//         } else {
//             console.log('Bunday mahsulot mavjud emas!');
//         }
//     }

  
//     qabul(mahsulot, miqdor) {
//         if (mahsulot === 'non') {
//             this.non += miqdor;
//             this.logAction('qabul', mahsulot, miqdor);
//         } else if (mahsulot === 'lagmon') {
//             this.lagmon += miqdor;
//             this.logAction('qabul', mahsulot, miqdor);
//         } else if (mahsulot === 'cola') {
//             this.cola += miqdor;
//             this.logAction('qabul', mahsulot, miqdor);
//         } else {
//             console.log('Bunday mahsulot mavjud emas!');
//         }
//     }

    
//     logAction(amal, mahsulot, miqdor) {
//         const currentTime = new Date().toLocaleTimeString(); 
//         console.log(`${amal} qilindi: ${mahsulot} ${miqdor}ta. Hozir ${currentTime}da ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.cola}ta cola mavjud!`);
//     }
// }

D-TASK: 

Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin
MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true

function checkContent(str1, str2) {

    return str1.split('').sort().join('') === str2.split('').sort().join('');
}
console.log(checkContent("mitgroup", "gmtiprou"));  // true buladi
console.log(checkContent("hello", "world"));        // false buladi


