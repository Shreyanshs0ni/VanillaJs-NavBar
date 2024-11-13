const hamButton = document.querySelector(".hamButton");
const links = document.querySelector(".links");

hamButton.addEventListener("click", function () {
	links.classList.toggle("showLinks");
})