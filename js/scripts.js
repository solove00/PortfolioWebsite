function responsiveNavBar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// $('#floating-nav').affix({
//     offset: {
//       top: ($('header').height() - 60)
//     }
// });	

window.onscroll = function() {myFunction()};

var header = document.getElementById("floating-nav");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// window.onscroll = function (ev) {
//     if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 1000) {
//         var x = document.getElementById("prototype_link");
//         if (x != undefined) {
//             this.console.log(x);
//             x.classList.add("textglow");
//         }
//     }
//     else {
//         var x = document.getElementById("prototype_link");
//         if (x != undefined) {
//             this.console.log(x);
//             x.classList.remove("textglow");
//         }
//     }
// };
