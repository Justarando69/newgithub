const darkButton = document.getElementById("drk-btn");
const lightButton = document.getElementById("lgt-btn");
const buttonContainer = document.querySelector(".drk-lgt-btn");

darkButton.classList.add("hidden");

function toggleButtons() {
  darkButton.classList.toggle("hidden");
  lightButton.classList.toggle("hidden");
}

lightButton.addEventListener("click", () => {
  toggleButtons();
  document.body.classList.add("dark-theme");
});
darkButton.addEventListener("click", () => {
  toggleButtons();
  document.body.classList.remove("dark-theme");
});
