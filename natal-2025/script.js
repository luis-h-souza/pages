tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#f02b19",
        "background-light": "#f8f6f6",
        "background-dark": "#221210",
      },
      fontFamily: {
        "display": ["Plus Jakarta Sans", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.5rem",
        "lg": "1rem",
        "xl": "1.5rem",
        "full": "9999px"
      },
    },
  },
}

// Baixa imagem do cardápio
document.getElementById("download").addEventListener("click", function () {
  window.location.href = "./assets/doc/cardapio_natal.jpg";
})

// Modal
function openModal() {
  const modal = document.getElementById('productModal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden'; // Previne scroll da página
}

function closeModal() {
  const modal = document.getElementById('productModal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = 'auto'; // Restaura scroll da página
}

// Fecha o modal ao clicar fora dele
document.getElementById('productModal')?.addEventListener('click', function (e) {
  if (e.target === this) {
    closeModal();
  }
});

// Fecha o modal ao pressionar ESC
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeModal();
  }
});
