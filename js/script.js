document.querySelector(".dropdown").addEventListener("click", function() {
		document.querySelector(".dropdown-menu").classList.toggle("vv")
		});


function each(elements, callback) {
	for (var index = 0; index < elements.length; index++) {
		callback(elements.item(index))
	}
}
var leaveFunction = function() {
	each(figure, function(element) {
			document.querySelector(".delay-00").classList.remove("class", "bounceInDown");
			document.querySelector(".delay-02").classList.remove("class", "bounceInDown");
			document.querySelector(".delay-04").classList.remove("class", "bounceInUp");
			document.querySelector(".delay-06").classList.remove("class", "bounceInUp");
			});
}

var figure = document.getElementsByTagName("figure");

var selectedFunction = function() {
	each(figure, function(element) {

			element.addEventListener('mouseleave', leaveFunction, false);
			});
	document.querySelector(".delay-00").classList.toggle("bounceInDown");
	document.querySelector(".delay-02").classList.toggle("bounceInDown");
	document.querySelector(".delay-04").classList.toggle("bounceInUp");
	document.querySelector(".delay-06").classList.toggle("bounceInUp");
};

for (var i = 0; i < figure.length; i++) {
	figure[i].addEventListener('mouseover', selectedFunction, false);
};

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

