function responsiveNavBar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

window.onscroll = function() {Adjustfloatingnva()};

var header = document.getElementById("floating-nav");
var firstdiv = document.getElementById("first");
var sticky = header.offsetTop;

$(window).resize(function() {
    sticky = header.offsetTop;
});

function Adjustfloatingnva() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
    firstdiv.style.paddingTop = "80px";
  } else {
    header.classList.remove("sticky");
    firstdiv.style.paddingTop = "40px";
  }
}
