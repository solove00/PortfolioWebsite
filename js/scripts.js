function responsiveNavBar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

$('#floating-nav').affix({
    offset: {
      top: ($('header').height() - 60)
    }
});	
// 
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
