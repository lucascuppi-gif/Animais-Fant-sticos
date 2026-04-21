const btnMobile = document.getElementById("menu");

function abrirMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("ativo");
}

btnMobile.addEventListener("click", abrirMenu);

const sections = document.querySelectorAll(".js-animacao");
const userWindow = window.innerHeight * 0.4;

function sectionAnimar() {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionVisivel = sectionTop - userWindow < 0;
    if (sectionVisivel) {
      section.classList.add("ativo");
    } else {
      section.classList.remove("ativo");
    }
  });
}

window.addEventListener("scroll", sectionAnimar);
