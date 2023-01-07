const painting = document.querySelector(".painting");

let selectedColor = "blue";

let blue = document.getElementById("blue");
let red = document.getElementById("red");
let yellow = document.getElementById("yellow");
let green = document.getElementById("green");

let last_blue = blue.addEventListener("click", function () {
  selectedColor = "blue";
});

let last_red = red.addEventListener("click", function () {
  selectedColor = "red";
});

let last_yellow = yellow.addEventListener("click", function () {
  selectedColor = "yellow";
});

let last_green = green.addEventListener("click", function () {
  selectedColor = "green";
});

painting.addEventListener("click", function (e) {
  e.target.style.backgroundColor = selectedColor;
});
