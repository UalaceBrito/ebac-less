// ============================================================
//  MAIN.JS
//  Interações JavaScript (menu mobile, etc.)
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('navToggle');
  const navigation = document.getElementById('navigation');

  if (navToggle && navigation) {
    navToggle.addEventListener('click', () => {
      navigation.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', navigation.classList.contains('open'));
    });

    // Fechar menu ao clicar em um link (mobile)
    const links = navigation.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          navigation.classList.remove('open');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  // Placeholder para futuras animações ou interações
  console.log('EbacStore - landing page carregada.');
});