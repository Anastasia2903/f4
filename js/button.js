function addImage() {
    // Додати нове зображення з URL (в даному випадку, так як відсутній сервер, тут стоїть той самий URL)
    var newImage = document.createElement("img");
    newImage.src = "img/kyiv.jpg";
    newImage.alt = "kyiv-image";
    newImage.width = 800;
    newImage.height = 550;

    // Додати нове зображення під існуюче
    document.body.appendChild(newImage);
}

function increaseImageSize() {
    var image = document.getElementById("myImage");
    var currentWidth = image.width;
    var newWidth = currentWidth * 1.2; // Збільшення на 20%

    // Змінити ширину зображення
    image.width = newWidth;
}
function decreaseImageSize() {
    var image = document.getElementById("myImage");
    var currentWidth = image.width;
    var newWidth = currentWidth * 0.8; // Зменшення на 20%

    // Змінити ширину зображення
    image.width = newWidth;
}

function deleteImage() {
    var image = document.getElementById("myImage");

    // Видалити зображення
    if (image) {
        image.parentNode.removeChild(image);
    }
}