'use strict';
// for (let i = 1; i < 10; i++) { 
//   console.log(i);
//   for (let j = 1; j < 10; i++) {  //ПРИ ИСПОЛЬЗОВАНИИ ЦИКЛА В ЦИКЛЕ НЕ ГЛАСНОЕ
//     // ПРАВИЛО let j = 1 ВО ПЕРВ ОБРАЩАТЬ ВНИМАНИЕ НА ИТЕРАТОР В УСЛОВИИ 
//     // ВМЕСТО i ИСПОЛЬЗОВАТЬ j, k,
//     console.log(j);

//   }      
// }
  
  // for (let i = 0; i < 3; i++) {
  //   console.log(i);
  //   for (let j = 0; j < 3; i++) {
  //   console.log(j);
  //   }
  // }

  // let result = '';
  // const lengtg = 7;

  // for (let i = 1; i < lengtg; i++) {

  //   for (j = 0; j < i; j++) {
  //     result += '*';
  //   }
  //   result += '\n';
  // }

  // console.log(result);

  // first: for (let i = 0; i < 3; i++) {
  //   console.log(`First level: ${i}`);
  //   for (let j = 0; j < 3; j++) {
  //     console.log(`Second level: ${j}`);
  //     for (let k = 0; k < 3; k++) {
  //       if (k === 2) continue first;
  //       console.log(`Third level: ${k}`);
  //     }
  //   }
  // }

//   
// function firstTask() {
//   // Пишем решение вот тут
//   for ( let i = 5; i < 11; i++) {
//   console.log(i)
//   }
  
// }

// firstTask()

// // Место для второй задачи
// function secondTask() {
//   // Пишем решение вот тут
//   for (let i = 20; i >= 10; i--) {
//       if (i === 13) break;
//       console.log(i);
//   }
  
// }

// secondTask()

// // Место для третьей задачи
// function thirdTask() {
//   // Пишем решение вот тут
//   for (let i = 2; i <= 10; i++) {
//       if (i % 2 === 0) {
//           console.log(i);
//       }
//   }
  
// }

// thirdTask()
// // Место для четвертой задачи

// // Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//    if (i % 2 === 0) {
//        continue;
//    } else {
//        console.log(i);
//    }
// }

// const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели', '');

//      const personalMovieDB = {
//          count: numberOfFilms,
//          movies: {},
//          actors: {},
//          genres: [],
//          privat: false
//      };
     
//      for (let i = 0; i < 2; i++) {
//       const a = prompt('Один из последних просмотренных фильмов?', ''),
//             b = prompt('На сколько оцените его?', '');
     
//             if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//      } else {
//        console.log('error');
//        i--;
//      }
//   }
//   if (personalMovieDB.count < 10) {
//     console.log('Просмотрено довольно мало фильмов');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//   console.log('Вы класический зритель');
// } else if (personalMovieDB.count >= 30) {
//   console.log('Вы киноман');
// } else {
//   console.log('Произошла ошибка');
// }
     
// console.log(personalMovieDB);

// ---------------------ФУНКЦИИ----------------------------

// let num = 20;

// function showFirstMessage(text) { // НАЗВАНИЕ ФУНКЦИИ ДОЛЖНО БЫТЬ ГЛАГОЛОМ С ПРИПИСКОЙ
//   // ТОГО НАД ЧЕМ ВЫПОЛНЯЕТ ДЕЙСТВИЕ
//   console.log(text);
//   num = 10;
//   console.log(num);
// }

// showFirstMessage('Hello World!');
// console.log(num);

// // function calc(a, b) {
// //   return (a + b); //ПОСЛЕ РЕТУРНА НИЧЕГО НЕ ЗАДАЕМ
// // }
// // console.log(calc(4, 3));
// // console.log(calc(5, 6));
// // console.log(calc(10, 6));

// function ret() { // FUNCTION DECLARATION СУЩЕСТВУЕТ ДО ВЫПОЛНЕНИЯ КАК ВАР ПЕРЕМен
//   let num = 50;


//   //

//   return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function() { // FUNCTION EXSPRESSION
//   console.log('Hello');
// }; // ;<========= обязательно после функции так как это переменная
// logger();

// const calc = (a, b) => { return a + b }; // СТРЕЛОЧНАЯ ФУНКЦИЯ ЕСЛИ ОДНА СТРОКА ТО БЕЗ ФИГУРНЫХ СКОБОК
// ИЛИ 1 АРГУМЕНТ БЕЗ КРУГЛЫХ СКОБОК

// --------- ПРОШТУДИРОВАТЬ ЦИКЛЫ ОБЯЗАТЕЛЬНО

const usdCurr = 28;
const eurCurr = 35;
const discount = 0.9;

function convert(amount, curr) {
  return curr * amount;
}

function promotion(result) {
  console.log(result * discount);
}

const res = convert(500, usdCurr);

promotion (res);
// convert(500, eurCurr);

function test () {
  for (let i = 0; i < 5; i++) {
    console.log(i);
    if (i === 3) return // ПОСЛЕ РЕТУРНА НЕ ПЕРЕНОСИТЬ СТРОКУ, 
    //КОД РАБОТАТЬ НЕ БУДЕТ
  }
  console.log('Done');
}
test();

// function doNothing() {}
// console.log(doNothing() === undefined);

// function sayHello(name) {
// name + 'Anton';
// }
// sayHello();

// function sayHello(name) {
//   return `Привет, ${name}!`;
// }

// sayHello('Alex');

// returnNeighboringNumbers(5);

// function getMathResult(num, times) {
//     if (typeof(times) !== 'number' || times <= 0) {
//         return num;
//     }

//     let str = '';

//     for (let i = 1; i <= times; i++) {
//         if (i === times) {
//             str += `${num * i}`;
//             // Тут без черточек в конце
//         } else {
//             str += `${num * i}---`;
//             // Это тоже самое, что и
//             // str = str + num * i + "---"
//         }
//     }

//     return str;
// }

// getMathResult(10, 5);

// const logg = "Hello worldsdfsfsfsfsf";

// console.log(logg.slice(4, 12));

function calculateVolumeAndArea(length) {
  if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
      return "При вычислении произошла ошибка";
  }

  let volume = 0,
      area = 0;

  volume = length * length * length;
  // length ** 3 - это тоже самое, что и выше или варианты через цикл.
  // ** - это оператор степени, напоминаю. Но онлайн редактор его не принимает =/
  area = 6 * (length * length);

  return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}

calculateVolumeAndArea(0);

function getCoupeNumber(seatNumber) {
  if (typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
      return "Ошибка. Проверьте правильность введенного номера места";
  }

  if (seatNumber === 0 || seatNumber > 36) {
      return "Таких мест в вагоне не существует";
  }

  return Math.ceil(seatNumber / 4);
  // тут очень много вариантов решения, но выбрал один из элегантных :)
}

getCoupeNumber(33);


const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели', '');

     const personalMovieDB = {
         count: numberOfFilms,
         movies: {},
         actors: {},
         genres: [],
         privat: false
     };
     function rememberMyFilm() {
     for (let i = 0; i < 2; i++) {
      const a = prompt('Один из последних просмотренных фильмов?', '').trim(), // <=== удаляет пробел перед строкой 
      //и после неё
            b = prompt('На сколько оцените его?', '');
     
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
     } else {
       console.log('error');
       i--;
     }
  }
}

rememberMyFilm()


  if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log('Вы класический зритель');
} else if (personalMovieDB.count >= 30) {
  console.log('Вы киноман');
} else {
  console.log('Произошла ошибка');
}
     
console.log(personalMovieDB);



//-----------CALLBACK FUNCTION----------------------------

function first(){
  setTimeout(function() {
    console.log(1);
  }, 500);
}

function second() {
  console.log(2);
}

first();
second();

function learnJs(lang, callback) {
  console.log(`Я учу: ${lang}`);
  callback();
}

function done() {
  console.log('Я прошел этот урок!');
}

learnJs('JavaScript', done); // <==== 'done' передаем а не вызываем, 
// не ставим скобки() так как не вызываем функцию то есть пишем без скобок done