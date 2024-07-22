/* Created by Tivotal */

let sliderInput = document.querySelector(".slider input");
let dragDiv = document.querySelector(".drag-div");
let img2 = document.querySelector(".img2");

sliderInput.addEventListener("input", (e) => {
  e.preventDefault();

  let sliderVal = sliderInput.value;

  dragDiv.style.left = sliderVal + "%";

  img2.style.width = sliderVal + "%";
});
