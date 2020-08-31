class Slider {
    constructor(photo, title) {

        this.photo = photo;
        this.title = title;
    }
}


var newSlider1 = new Slider("img/image1.jpg", "title 1")
var newSlider2 = new Slider("img/image2.jpg", "title 2")
var newSlider3 = new Slider("img/image3.jpg", "title 3")


var myBtn1 = document.getElementById("slide1");
var myBtn2 = document.getElementById("slide2");
var myBtn3 = document.getElementById("slide3");


myBtn1.addEventListener("click", function () {

    document.getElementById("jeden").setAttribute("src", newSlider1.photo)
    document.getElementById("slajd").innerHTML = newSlider1.title;

});
myBtn2.addEventListener('click', function () {
    document.getElementById("jeden").setAttribute("src", newSlider2.photo)
    document.getElementById("slajd").innerHTML = newSlider2.title;
})
myBtn3.addEventListener('click', function () {
    document.getElementById("jeden").setAttribute("src", newSlider3.photo)
    document.getElementById("slajd").innerHTML = newSlider3.title;
})