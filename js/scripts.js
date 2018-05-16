function responsiveNavBar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

var header = document.getElementById("floating-nav");
var firstdiv = document.getElementById("first");
var sticky = header.offsetTop;

$(window).resize(function () {
    sticky = header.offsetTop;
});

$(document).ready(function() {  
    AdjustfloatingNav()
});

window.onscroll = function () { AdjustfloatingNav() };

function AdjustfloatingNav() {
    if (header.offsetTop > 0) {
        sticky = header.offsetTop;
    }
    if (window.pageYOffset >= sticky) {
        header.classList.add("sticky");
        firstdiv.style.paddingTop = "80px";
    } else {
        header.classList.remove("sticky");
        firstdiv.style.paddingTop = "40px";
    }
}
