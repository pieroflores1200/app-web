/* ============================================================
   SCRIPT.JS
   Plásticos Nacionales S.A. — JavaScript general del sitio
   ============================================================
   Este archivo es puro JavaScript (Vanilla JS), sin librerías.
   Se usa en index.html, vendedor.html y cliente.html.

   QUÉ HACE:
   1. Anima las tarjetas para que aparezcan suavemente
      (fade in) a medida que el usuario hace scroll.
   2. Da retroalimentación visual (efecto "ripple" ligero)
      al hacer clic en una tarjeta, antes de abrir el enlace.

   NO NECESITAS MODIFICAR ESTE ARCHIVO para cambiar enlaces,
   PDFs, colores o textos. Eso se cambia directamente en los
   archivos .html y en css/estilos.css.
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ------------------------------------------------------------
     1. ANIMACIÓN AL HACER SCROLL
     ------------------------------------------------------------
     Usamos IntersectionObserver (API nativa del navegador) para
     detectar cuándo cada tarjeta ".tarjeta" entra en pantalla y
     así agregarle la animación de aparición de forma escalonada.
     ------------------------------------------------------------ */
  const tarjetas = document.querySelectorAll('.tarjeta');

  if (tarjetas.length > 0) {
    const observador = new IntersectionObserver((entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('en-vista');
          observador.unobserve(entrada.target);
        }
      });
    }, {
      threshold: 0.15
    });

    tarjetas.forEach((tarjeta, indice) => {
      // Retraso escalonado: cada tarjeta aparece un poco después que la anterior
      tarjeta.style.animationDelay = (indice * 0.08) + 's';
      observador.observe(tarjeta);
    });
  }

  /* ------------------------------------------------------------
     2. EFECTO AL HACER CLIC EN UNA TARJETA
     ------------------------------------------------------------
     Agrega una breve clase ".tarjeta--clic" para dar sensación
     de "presionado" antes de que el navegador abra el enlace.
     No es necesario modificar esto.
     ------------------------------------------------------------ */
  const enlacesTarjeta = document.querySelectorAll('.tarjeta, .tarjeta-opcion');

  enlacesTarjeta.forEach((el) => {
    el.addEventListener('click', function () {
      el.style.transform = 'scale(0.97)';
      setTimeout(() => {
        el.style.transform = '';
      }, 150);
    });
  });

});
