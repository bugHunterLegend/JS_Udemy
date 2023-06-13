'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const movieDB = {
    movies: [
      'Logan',
      'La La Land',
      'Second Life',
      'Untouchable',
      'I am Legend',
    ],
  };

  const adv = document.querySelectorAll('.promo__adv img'),
    poster = document.querySelector('.promo__bg'),
    genre = poster.querySelector('.promo__genre'),
    movieList = document.querySelector('.promo__interactive-list'),
    addForm = document.querySelector('form.add'),
    addInput = document.querySelector('.adding__input'),
    checkbox = document.querySelector('[type="checkbox"]');

  addForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let newFilm = addInput.value;
    // const newFilm = addInput.ariaValue;
    // const favorite = checkbox.ariaChecked;
    const favorite = checkbox.checked;

    if (newFilm) {
        if (newFilm.length > 21){
            newFilm = `${newFilm.substring(0,22)}...`;
        }
      movieDB.movies.push(newFilm);
      sortArr(movieDB.movies);
      createMovieList(movieDB.movies, movieList);
    }

    addForm.reset();
  });

  const deleteAdv = (arr) => {
    arr.forEach((item) => {
      item.remove();
    });
  };

  const makeChanges = () => {
    genre.textContent = 'dramatic movie';
    poster.style.backgroundImage = 'url("img/bg.jpg")';
  };

  const sortArr = (arr) => {
    arr.sort();
  };

  function createMovieList(films, parent) {
    parent.innerHTML = '';

    films.forEach((film, i) => {
      parent.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
           <div class="delete"></div>
        </li>
      `;
    });

    document.querySelectorAll('.delete').forEach((btn, i) => {
        btn.addEventListener('click', () => {
        btn.parentElement.remove();
        movieDB.movies.slice(i,1);

        createMovieList(films, parent );
        });
    });
  }

  deleteAdv(adv);
  makeChanges();
  sortArr(movieDB.movies);
  createMovieList(movieDB.movies, movieList);
});
