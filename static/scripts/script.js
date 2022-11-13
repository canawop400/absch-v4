function all() {
	let mainContainer = document.getElementById("main-container");

	// Show navbar
	function manageNavbar(event) {
		let navbar = document.getElementById("navbar");
		let hamburgerMenu = document.getElementById("hamburger-menu");
		let main = document.getElementById("main");

		if ((event.target == hamburgerMenu)  || (hamburgerMenu.contains(event.target)) || (event.target == navbar) || (navbar.contains(event.target))) {
			navbar.classList.remove("hidden");
			main.classList.add("blured");

		} else {
			navbar.classList.add("hidden");
			main.classList.remove("blured");
		}
	}

	mainContainer.addEventListener("click", manageNavbar);
}

function index() {
	console.log("index");
}

function procedures() {
	console.log("procedures");
}

function news() {
	console.log("news");
}

function contact() {
	console.log("contact");
}


(() => {
	// Main function

	all();

	switch (window.location.pathname) {
		case "/":
			index();
			break;
		
		case "/tramites/":
			procedures();
			break;

		case "/noticias/":
			news();
			break;

		case "/contacto/":
			contact();
			break;
	}

})();