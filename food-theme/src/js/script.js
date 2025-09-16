const btnMobile = document.getElementById('mobile_btn')
const mobileMenu = document.getElementById('mobile_menu')
const icone = btnMobile.querySelector('i')

btnMobile.addEventListener('click', () => {
  mobileMenu.classList.toggle('active_menu')

  // classe de animação
  icone.classList.add('animando')

  // troca do ícone de hamburguer por X
  setTimeout(() => {
    if (mobileMenu.classList.contains('active_menu')) {
      icone.classList.replace('fa-bars', 'fa-xmark')
    } else {
      icone.classList.replace('fa-xmark', 'fa-bars')
    }
    // remove a classe de animação
    icone.classList.remove('animando')
  }, 150)
})


// SCROLL DA PÁGINA

const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-item');
let activeSectionIndex = 0;

// Inicializar animações ScrollReveal (executar uma vez)
ScrollReveal().reveal('#cta', {
  origin: 'left',
  duration: 2000,
  distance: '20%',
});

ScrollReveal().reveal('.dish', {
  origin: 'left',
  duration: 2000,
  distance: '20%',
});

ScrollReveal().reveal('#testimonial_chef', {
  origin: 'left',
  duration: 1000,
  distance: '20%',
});

ScrollReveal().reveal('.feedback', {
  origin: 'right',
  duration: 1000,
  distance: '20%',
});

// Evento de Scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  const scrollPosition = window.scrollY - header.offsetHeight;

  // Atualiza o header box-shadow
  header.style.boxShadow = scrollPosition <= 0 ? 'none' : '5px 1px 5px rgba(0, 0, 0, 0.1)';

  // Atualiza o active na navegação do item
  sections.forEach((section, i) => {
    const sectionTop = section.getBoundingClientRect().top + window.scrollY - 0.5 * section.offsetHeight;
    
    const sectionBottom = sectionTop + section.offsetHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      activeSectionIndex = i;
      return;
    }
  });

  navItems.forEach(item => item.classList.remove('active'));
  navItems[activeSectionIndex]?.classList.add('active');
});