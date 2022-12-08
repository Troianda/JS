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

    const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели', '');

    const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', ''),
          c = prompt('Один из последних просмотренных фильмов?', ''),
          d = prompt('На сколько оцените его?', '');
    
    personalMovieDB.movies[a] = b;
    personalMovieDB.movies[c] = d;

    console.log(personalMovieDB);

