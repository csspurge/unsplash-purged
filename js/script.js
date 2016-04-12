

document.querySelector(".dropdown").addEventListener("click", function() {
  // document.querySelector(".dropdown-menu").classList.toggle("o-00")
  document.querySelector(".dropdown-menu").classList.toggle("vv")
});

// var figure = document.getElementsByTagName("figure");
// figure.addEventListener("mouseover", function() {
//   this.classList.toggle("magic")
// });

function each(elements, callback) {
  for (var index = 0; index < elements.length; index++) {
    callback(elements.item(index))
  }
}
var leaveFunction = function() {
    each(figure, function(element) {
    //element.classList.remove("class", "magic");
    document.querySelector(".delay-00").classList.remove("class", "bounceInDown");
    document.querySelector(".delay-02").classList.remove("class", "bounceInDown");
    });
}

var figure = document.getElementsByTagName("figure");

var selectedFunction = function() {
    each(figure, function(element) {

            element.addEventListener('mouseleave', leaveFunction, false);
        });
    //this.classList.toggle("magic");
    document.querySelector(".delay-00").classList.toggle("bounceInDown");
    document.querySelector(".delay-02").classList.toggle("bounceInDown");
};

for (var i = 0; i < figure.length; i++) {
    figure[i].addEventListener('mouseover', selectedFunction, false);
};

// function myFunction() {
//     document.getElementsByClassName("dropdown-menu").classList.toggle("show");
// }

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropdown')) {

    var dropdowns = document.getElementsByClassName("dropdown-menu");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('vv')) {
        openDropdown.classList.remove('vv');
      }
    }
  }
}

// var dropdownmenu = document.getElementsByClassName('dropdown');
//
// dropdownmenu.addEventListener("click", function() {
//   document.querySelector("dropdown-menu").classList.toggle("o-100")
// })

// document.querySelector("button").addEventListener("click", function() {
//   document.querySelector("section").classList.toggle("visible")
// })
