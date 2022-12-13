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

let num = 20;

function showFirstMessage(text) { // НАЗВАНИЕ ФУНКЦИИ ДОЛЖНО БЫТЬ ГЛАГОЛОМ С ПРИПИСКОЙ
  // ТОГО НАД ЧЕМ ВЫПОЛНЯЕТ ДЕЙСТВИЕ
  console.log(text);
  num = 10;
  console.log(num);
}

showFirstMessage('Hello World!');
console.log(num);

// function calc(a, b) {
//   return (a + b); //ПОСЛЕ РЕТУРНА НИЧЕГО НЕ ЗАДАЕМ
// }
// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));

function ret() { // FUNCTION DECLARATION СУЩЕСТВУЕТ ДО ВЫПОЛНЕНИЯ КАК ВАР ПЕРЕМен
  let num = 50;


  //

  return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() { // FUNCTION EXSPRESSION
  console.log('Hello');
}; // ;<========= обязательно после функции так как это переменная
logger();

const calc = (a, b) => { return a + b }; // СТРЕЛОЧНАЯ ФУНКЦИЯ ЕСЛИ ОДНА СТРОКА ТО БЕЗ ФИГУРНЫХ СКОБОК ИЛИ 1 АРГУМЕНТ БЕЗ КРУГЛЫХ СКОБОК
