const image = document.getElementById("hamburger");
const menu = document.getElementById("menu");

image.addEventListener("click", function() {
  if (menu.style.display === "none" || menu.style.display === "") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
});