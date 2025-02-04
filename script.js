const btn = document.querySelector(".wrapper");
const block = document.querySelector(".block");
const body = document.querySelector("body");
const sound = new Audio("sound.mp3");

btn.addEventListener("click", () => {
  block.classList.toggle("right");
  body.classList.toggle("backC");
  sound.play();
  btn.classList.toggle("lightC");
});
