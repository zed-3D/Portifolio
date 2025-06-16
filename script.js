const toggleButton = document.getElementById("toggle-dark");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
const savedTheme = localStorage.getItem("theme");

// Função que aplica o tema e muda o texto do botão
function setTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark-mode");
    toggleButton.textContent = "Modo Claro";
  } else {
    document.body.classList.remove("dark-mode");
    toggleButton.textContent = "Modo Escuro";
  }
}

// Detectar o tema inicial
if (savedTheme) {
  setTheme(savedTheme);
} else {
  setTheme(prefersDark.matches ? "dark" : "light");
}

// Alternar tema manualmente ao clicar no botão
toggleButton.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark-mode");
  const newTheme = isDark ? "dark" : "light";
  localStorage.setItem("theme", newTheme);
  toggleButton.textContent = isDark ? "Modo Claro" : "Modo Escuro";
});

// Função para ajustar o padding-top do body com base na altura do header
function ajustarPaddingCorpo() {
  const header = document.querySelector("header");
  if (header) {
    const altura = header.offsetHeight;
    document.body.style.paddingTop = `${altura}px`;
  }
}

// Chamar a função ao carregar e ao redimensionar
window.addEventListener("DOMContentLoaded", ajustarPaddingCorpo);
window.addEventListener("resize", ajustarPaddingCorpo);
