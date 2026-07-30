/* ============================================================
   ACCESO-VENDEDOR.JS
   Plásticos Nacionales S.A. — Contraseña de acceso al portal
   del vendedor.
   ============================================================
   Este archivo SOLO se carga en vendedor.html.

   COMPORTAMIENTO:
   La contraseña se pide SIEMPRE que se entra a esta página
   (por URL directa, por el botón Inicio, o por la pestaña
   "Vendedor" desde el portal del cliente). No se recuerda el
   acceso entre visitas ni entre páginas.

   ⚠️ IMPORTANTE — LEE ESTO:
   Este candado es una protección "ligera", pensada para que un
   visitante casual no entre por error al portal del vendedor.
   Como el sitio es 100% estático (sin servidor), cualquier
   persona con conocimientos técnicos podría ver esta contraseña
   revisando el código fuente. NO la uses para proteger
   información confidencial o sensible. Si en el futuro necesitas
   seguridad real, lo correcto es agregar un login con backend.

   👉 PARA CAMBIAR LA CONTRASEÑA:
   Edita el valor de CLAVE_CORRECTA aquí abajo.
   ============================================================ */

(function () {

  const CLAVE_CORRECTA = "vendedorplansa17";

  const body = document.body;
  const formulario = document.getElementById("formCandado");
  const campoPassword = document.getElementById("passwordInput");
  const mensajeError = document.getElementById("candadoError");

  /* Al enviar el formulario de la pantalla de acceso */
  if (formulario) {
    formulario.addEventListener("submit", function (evento) {
      evento.preventDefault();

      if (campoPassword.value.trim() === CLAVE_CORRECTA) {
        // Contraseña correcta: se desbloquea la página (solo por esta visita)
        body.classList.remove("bloqueado");
        mensajeError.hidden = true;
      } else {
        // Contraseña incorrecta: se muestra el mensaje de error
        mensajeError.hidden = false;
        campoPassword.value = "";
        campoPassword.focus();
      }
    });
  }

})();
