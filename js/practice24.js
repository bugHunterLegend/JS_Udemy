"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,
  start: function () {
    personalMovieDB.count = +prompt("How many films have you seen?", "");

    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt("How many films have you seen?", "");
    }
  },
  detectPersonalLevels: function () {
    if (personalMovieDB.count < 10) {
      console.log("too little films are seen");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("you are classic movie watcher");
    } else if (personalMovieDB.count >= 30) {
      console.log("you are movie monster watcher");
    } else {
      console.log("error here");
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibilityMyDB: function () {
    if (personalMovieDB.private) {
      personalMovieDB.private = false;
    } else {
      personalMovieDB.private = true;
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`Your lovely genre is under number ${i}`);
      console.log("lalalala");

      if (genre === "" || genre === null || genre === undefined) {
        console.log("Data are not correct or empty");
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genre;
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Your favorite genre ${i + 1} - ${item} `);
    });
  },
};
