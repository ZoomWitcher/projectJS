"use strict";
//alert("hi bitsh");
//const result = confirm("?");
//const answer = prompt("?","18");
// const answers = [];

// answers[0] = prompt("?","18");
// answers[1] = prompt("?","18");
// answers[2] = prompt("?","18");
// document.write(answers);
//let number0fFilms;

const number0fFilms = +prompt("?");

const personalMovieDB = {
    count: number0fFilms,
    movies:{},
    actors:{},
    genres: [],
    privat:false
};
const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);