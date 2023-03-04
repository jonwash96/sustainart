//var page1 = $('#abouttheshow').offset.top + $('#abouttheshow').height();
//
//$(window).on('scroll', function() {
//    var page2 = Math.round($(window).scrollTop());
//    
//    if (page2 > page1) {
//        $('#navbar-ul').addClass('pg2-navbar-b');
//        $('#navbar-ul').removeClass('pg2-navbar-w');
//    } else {
//        $('#navbar-ul').removeClass('pg2-navbar-b');
//        $('#navbar-ul').addClass('pg2-navbar-w');
//    }
//})

//var slide1 = document.getElementById("about-sl1")[0];
//var slide2 = document.getElementById("about-sl2")[0];
//var slide3 = document.getElementById("about-sl3")[0];
//var slide4 = document.getElementById("about-sl4")[0];
//var slide5 = document.getElementById("about-sl5")[0];
//var slides = [slide1, slide2, slide3, slide4, slide5];
//var currentSlide = 0;


//for (let i = 0; i < slides.length; i++) {
//    slides[i].style.display = "none";
//}
//slides[currentSlide].style.display = "block";
//
//var radioButtons = document.getElementByName("slide-selector");
//for (let i = 0; i < radioButtons.length; i++) {
//    radioButtons[i].onclick = function() {
//        for (let j = 0; j < radioButtons.length; j++) {
//            slides[j].style.display = "none";
//        }
//        currentSlide = parseInt(this.value);
//        slides[currentSlide].style.display = "block";
//    };
//}

let ddn = document.getElementById("logo-dropdown");
    function toggleddn(){
        ddn.classList.toggle("openddn");
    }