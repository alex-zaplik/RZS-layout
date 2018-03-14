window.onscroll = function() {stick_bar()};

var bar = document.getElementById("main-nav");
var sidebar = document.getElementById("page-nav");
var content = document.getElementById("content");
var sticky = bar.offsetTop;

function stick_bar() {
    if (window.pageYOffset >= sticky) {
        sidebar.classList.add("sticky");
        bar.parentNode.classList.add("sticky");
        content.classList.add("extra-margin");
    } else {
        sidebar.classList.remove("sticky");
        bar.parentNode.classList.remove("sticky");
        content.classList.remove("extra-margin");
    }
}
