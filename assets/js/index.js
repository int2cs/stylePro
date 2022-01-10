const burger = document.querySelector("#burger");
const close = document.querySelector("#close");
const menu = document.querySelector("#menu");

burger.addEventListener("click", () => {
  console.log("trigger !");
  menu.style.transform = "translate(0)";
});
close.addEventListener("click", () => {
  menu.style.transform = "translate(-100%)";
});
