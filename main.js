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

const toggleBtn = document.querySelector(".toggle-btn");
const navbar1 = document.querySelector("#navbar");

toggleBtn.addEventListener("click", function () {
    navbar1.classList.toggle("active");
});
