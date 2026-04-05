const btnMobile = document.getElementById("menu");

function abrirMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("ativo");
}

btnMobile.addEventListener("click", abrirMenu);
