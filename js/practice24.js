'use strict';

let arrQuestions = ['which film have you seen last time?', 'your rating?', 'xxx' ];
let numberOfFilms = prompt('How many films have you seen?', '');

const personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genders: [],
    privat : false
};

	for (let i = 0; i <= 1; i++){
        const a = prompt('which film have you seen last time?', ''),
                b = prompt('your rating?', '');
        if (a != null && b != null && a != '' && b != '' && a.length < 50){
            personalMovieDB.movies[a] = b;
		console.log('done');
	} else {
        console.log('error');
        i--;
}}

if (personalMovieDB.count < 10){
    console.log('too little films are seen');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log('you are classic movie watcher');
} else if (personalMovieDB.count >= 30 ){
    console.log('you are movie monster watcher');
} else {
    console.log('error here');
}

 console.log(personalMovieDB);