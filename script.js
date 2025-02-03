document.querySelector(".wrapper").addEventListener("click", () => {
  document.querySelector(".block").classList.toggle("right");
  const sound = new Audio("sound.mp3");
  sound.play();
});

document.querySelector(".wrapper").addEventListener("click", () => {
  document.querySelector(".wrapper").classList.toggle("border");
});
