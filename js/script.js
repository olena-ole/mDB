/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

//1) Удалить все рекламные блоки со страницы (правая часть сайта)
const promoBanners = document.querySelectorAll('.promo__adv-banner');
promoBanners.forEach( item => {
    item.remove();
});

//2) Изменить жанр фильма, поменять "комедия" на "драма"
const promoGenre = document.querySelector('.promo__genre');
promoGenre.innerHTML = "драма";

//3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
//Реализовать только при помощи JS
const promoBG = document.querySelector('.promo__bg');
promoBG.style.backgroundImage = "url('img/bg.jpg')";

//4) Список фильмов на странице сформировать на основании данных из этого JS файла.
//Отсортировать их по алфавиту 
//5) Добавить нумерацию выведенных фильмов
const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
const unsortedMovieDB = movieDB.movies;
const sortedMovieDB = unsortedMovieDB.sort();
console.log(sortedMovieDB);

const interactiveItems = document.querySelectorAll('.promo__interactive-item');
interactiveItems.forEach(function(item, i) {
    item.innerHTML = `${i+1}. ${sortedMovieDB[i]}`;
});
