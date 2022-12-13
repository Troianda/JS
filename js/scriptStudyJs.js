'use strict';



// const arr = ["a", "b", "c"];
// const arrObj = {
//   a: "a",
//   1: "b",
//   2: "c"
// };
// const b = 'b';
// // arrObj.b = '1234';
// arrObj[b] = '1234';


// console.log(arrObj['b']);
// console.log(arrObj.b);

// const obj = {
//   Anna: 500,
//   Alice: 800
// };

// const result = confirm('Are you here?');
// console.log(result);

// const answer = +prompt('Do you have 18?', '18');
// console.log(answer + 5);

// const answers = [];

// answers[0] = prompt('What`s your name?', '');
// answers[1] = prompt('What`s your sername?', '');
// answers[2] = prompt('How old are you?', '');

// document.write(answers);
 
// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);

// const user = "Ivan";

// alert(`Привет, ${user}`);

// let incr = 10,
//     decr = 10;

    // incr++;
    // decr--;

    // console.log(++incr);
    // console.log(--decr);

    // console.log(25%8);

    // const isChecked = true,
    //       isClose = true;

    //       console.log(isChecked &&  isClose);


    //               08.12.22
    //  1.1   -----------        MY PRACTICE ----------------
    // let answer = [""];    
    // let numberOfFilms = answer;
    
    // answer[0] = prompt("Сколько фильмов Вы уже посмотрели", "");
    // console.log(numberOfFilms);
    
    // let answerLastFilmSaw = "";
    // let answerFilmMark = "";

    // answerLastFilmSaw = prompt("Один из последних просмотренных фильмов?", "");
    // answerFilmMark = prompt("На сколько оцените его?", "");

    // let personalMovieDB = {
    //     count: answer,
    //     movies: {
    //         answerLastFilmSaw: answerFilmMark 
    //     },
    //     actors: {},
    //     genres: [],
    //     privat: false
    // };
    // console.log(personalMovieDB);

    // 1.2  ----------------TEACHER PRACTICE -----------------

    // const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели', '');

    // const personalMovieDB = {
    //     count: numberOfFilms,
    //     movies: {},
    //     actors: {},
    //     genres: [],
    //     privat: false
    // };
    // const a = prompt('Один из последних просмотренных фильмов?', ''),
    //       b = prompt('На сколько оцените его?', ''),
    //       c = prompt('Один из последних просмотренных фильмов?', ''),
    //       d = prompt('На сколько оцените его?', '');
    
    // personalMovieDB.movies[a] = b;
    // personalMovieDB.movies[c] = d;

    // console.log(personalMovieDB);
//-----------------------УСЛОВИЯ----------------------//
// if (4 == 9) {
//     console.log('Ok!');
// } else {
//     console.log('Error');
// }

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('to much');
// } else {
//     console.log('Ok!');
// }
// (num === 50) ? console.log('Ok!') : console.log('Error');

// const num = 50;

// switch (num) {
//     case 49: //СРАВНИВАТЬ ТОЛЬКО НА СТРОГОЕ СООТВЕТСТВИЕ
//         console.log('not true');
//         break; //ПОСЛЕ КАЖДОЙ КОМАНДЫ / ДЕЙСТВИЯ ЗАПИСЫВАТЬ БРЕЙК
//     case 100:
//         console.log('not true');
//         break;
//     case 509:
//         console.log('it is true');
//         break;
//     default:
//         console.log('POHUY');
//         break;       // ЧТО БЫ ВЫПОЛНИТЬ ДЕЙСТВИЕ ПО УМОЛЧАНИЮ ЕСЛИ НИЧЕГО НЕ ПОДОШЛО
// }

// const hamburger = true; // Undefined, null, 0, NaN, '', <== ВСЕГДА FALSE В СРАВНЕНИИ
// const fries = true;

// if (hamburger && fries) {
//     console.log('Я сыт!');
// }

// console.log((hamburger && fries));

// const hamburger = 2; 
// const fries = 1;

// if (hamburger === 3 && fries) {
//     console.log('Все сыты!');
// } else {
//     console.log('Мы уходим');
// }

// const hamburger = 3; 
// const fries = 1;
// const cola = 0;

//console.log(hamburger === 3 && cola && fries); //ОПЕРАТОР И (&&) ВОЗВРАЩАЕТ ПЕРВОЕ ЛОЖНОЕ ЗНАЧЕНИЕ(НА КОТОРОМ ОН ОСТАНОВИЛ СВОЮ РАБОТУ)
//ЕСЛИ ВСЕ ВЕРНО ОН ВЕРНЕТ ЗНАЧЕНИЕ ПОСЛЕДНЕГО НА КОТОРОМ ОН СРАБОТАЛ
// ОПЕРАТОР И(&&) ЗАПИНАЕТСЯ НА ЛЖИ

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'oihjghccvhjbjbj');

// if (hamburger === 3 && cola === 1 && fries) {
//     console.log('Все сыты!');
// } else {
//     console.log('Мы уходим');
// }

// const hamburger = 3; 
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// //ОПЕРАТОР ИЛИ (ЕСЛИ ХОТЬ ЧТО_ТО ЕСТЬ ОПЕРАЦИЯ ВЫПОЛНИТСЯ)
// //КАК ТОЛЬКО "ИЛИ" ВИДИТ ПРАВДУ ОН ВОЗВРАЩАЕТ ЗНАЧЕНИЕ И ОСТАНАВЛИВАЕТСЯ 
// //"ИЛИ(||) ЗАПИНАЕТСЯ НА ПРАВДЕ" 
// //ЕСЛИ ВСЕ НЕ ПРАВДА ВОЗВР ПОСЛЕДНЕЕ ЛОЖНОЕ ЗНАЧЕНИЕ

// if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
//     console.log('Все good!');
// } else {
//     console.log('Мы уходим');
// }
// console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);

// let johnReport, alexReport, samReport, mariaReport = 'done';

// console.log(johnReport || alexReport || samReport || mariaReport);

// console.log(!0); // ОПЕРАТОР РЕВЕРСА(ОТРИЦАНИЯ) ОБРАЩАЕТ ПРАВДУ В ЛОЖЬ

// console.log( NaN || 2 || undefined );

// console.log( NaN && 2 && undefined );


// console.log( !1 && 2 || !3 ); // WHY FALSE?????

// console.log( 25 || null && !3 );

// console.log( NaN || null || !3 || undefined || 5);

// console.log( NaN || null && !3 && undefined || 5);

// console.log( 5 === 5 && 3 > 1 || 5);

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!')
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }





// --------------------------ЦИКЛЫ-----------------

let num = 50;

// while(num <= 55) {  //КАК РАБОТАЕТ ЦИКЛ: Пока условие выполняется мы будем делать 
//какие-то действия ( ПОКА ПЕРЕМЕННАЯ NUM  НЕ БУДЕТ МЕНЬШЕ ИЛИ РАВНО 55
// ЦИКЛ ВЫПОЛНЯЕТСЯ)
//   console.log(num);
//   num++;
// }

// do {    //СНАЧАЛА ЦИКЛ ЧТО-ТО СДЕЛАЕТ А ПОТОМ ПРОВЕРИТ УСЛОВИЯ
//   console.log(num);
//   num++;
// }
// while(num < 55);



// for (let i = 1; i < 10; i++) { //ЦИКЛ КОГДА НАЧНЕТСЯ В НЕМ СОЗДАСТА ПЕРЕМЕННАЯ -
//     //  - let i = 1; -- ИТЕРАТОР (ИТЕРАЦИЯ - ОДНО ПОВТОРЕНИЕ ЦИКЛА)
//     // i < 8; УСЛОВИЕ ПРИ КОТОРОМ ЦИКЛ ОСТАНОВИТ СВОЮ РАБОТУ
//     //  i++ -- ШАГ ЦИКЛА, В КАЖДОМ ПОВТОРЕНИИ i БУДЕТ УВЕЛИЧИВАТЬСЯ НА 1
//     if (i === 6) {
//         //break;  //STOP IT CUKL
//         continue; //ПОЗВОЛЯЕТ ПРОПУСТИТЬ ТОТ ШАГ/ИТЕРАЦИЮ 
//         //НО ПРИ ЭТОМ НЕ ПРИРЫВАЕТ ПОЛНОСТЬЮ ЦИКЛ И ПЕРЕХОДИТ НА СЛЕДУЮщую
//         //1 2 3 4 5 7 8 9 10
//     }
// }
    
//     console.log(i);
  
