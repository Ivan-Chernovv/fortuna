const menu = document.querySelector(".header__nav");
const menuBtn = document.querySelector(".header__btn");
const body = document.body;

if (menu && menuBtn) {
  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
    menuBtn.classList.toggle("active");
    body.classList.toggle("lock");
  });
}

menu.addEventListener("click", (e) => {
  if (e.target.classList.contains("header__nav")) {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("lock");
  }
});
