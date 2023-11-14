// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Зміна кольору фону та тексту за допомогою getElementById()
    var header = document.getElementById('header');
    header.addEventListener('click', function() {
        toggleColors(this);
    });

    // Зміна кольору фону та тексту за допомогою querySelector()
    var sportsListItem = document.querySelector('#hobbies-list li:last-child');
    sportsListItem.addEventListener('click', function() {
        toggleColors(this);
    });

    var moviesHeader = document.getElementById('movies');
    moviesHeader.addEventListener('click', function() {
        toggleColors(this);
    });

    function toggleColors(element) {
        var currentBackgroundColor = element.style.backgroundColor;
        var currentColor = element.style.color;

        // Змінюємо кольори відповідно
        if (!currentBackgroundColor || !currentColor) {
            element.style.backgroundColor = getRandomColor();
            element.style.color = getRandomColor();
        } else {
            element.style.backgroundColor = getRandomColor();
            element.style.color = getRandomColor();
        }
    }

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }



});
