'use strict';

let numberOfFilms = prompt('How many films have you seen?', '');

const personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genders: [],
    privat : false
};

let a = prompt('which film have you seen last time?', ''),
b = prompt('your rating?', ''),
c = prompt('which film have you seen last time?', ''),
d = prompt('your rating?', '');


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;


console.log(personalMovieDB);


console.log( 5 === 5 && 3 > 1 || 5);
