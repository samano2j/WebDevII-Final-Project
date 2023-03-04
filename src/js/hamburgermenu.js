export function toggleNav() {
  const body = document.body;
  const hamburger = document.getElementById("js-hamburger");
  const blackBg = document.getElementById("js-black-bg");

  hamburger.addEventListener("click", function () {
    body.classList.toggle("nav-open");
  });
  blackBg.addEventListener("click", function () {
    body.classList.remove("nav-open");
  });
}
