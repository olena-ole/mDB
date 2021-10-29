'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const adv = document.querySelectorAll('.promo__adv img'),
        bg = document.querySelector('.promo__bg'),
        genre = bg.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };
    
    const makeChanges = () => {
        genre.textContent = "драма";
        bg.style.backgroundImage = "url('img/bg.jpg')";
    };

    const sortArr = (arr) => {
        arr.sort();
    };
    
    function createMovieList(films, parent) {
        parent.innerHTML = "";
        sortArr(films);
        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1}. ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                films.splice(i, 1);
                createMovieList(films, parent);
            });
        });
    }

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favourite = checkbox.checked;

        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if (favourite) {
                console.log("Добавляем любимый фильм");
            }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, movieList);
        }

        event.target.reset();
    });

    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, movieList);
    
    console.log(movieDB);
});


//Мои способы
    /* const submit = document.querySelector('.add button'),
        userInput = document.querySelector('.add input'),
        checkbox = document.querySelector('.yes').previousElementSibling;
    console.log(submit);
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        if (checkbox.checked === true) {
            console.log("Сделать любимым");
        }
        movieDB.movies.push(userInput.value);
        displayMovies();
    }); */

    /* const wasteBin = document.querySelectorAll('div.delete');
    console.log(wasteBin);
    wasteBin.forEach((bin, i) => {
        bin.addEventListener('click', (e) => {
            e.preventDefault();
            movieDB.movies.splice(i, 1);
            displayMovies();
        });
    }); */


/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */