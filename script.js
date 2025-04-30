const elementos = document.querySelectorAll('.aparecer');

const observador = new IntersectionObserver((entradas) => {
  entradas.forEach(entrada => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

elementos.forEach(el => observador.observe(el));
