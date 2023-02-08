// sticky navbar 
window.onscroll = function () { myFunction() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

// responsive toogle navbar
const toggleBtn = document.querySelector(".toggle-btn");
const navbar1 = document.querySelector("#navbar");

toggleBtn.addEventListener("click", function () {
    navbar1.classList.toggle("active");
});

// dropdown Js
$('.dropdown').click(function () {
    $(this).find('.drop-content').fadeToggle('fast');
    $(this).find('a').toggleClass('active');
});


$(".dropdown").mouseleave(function () {
    $('.drop-content').fadeOut('fast');
    $('a').removeClass('active');
});
