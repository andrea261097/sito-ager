// Acta — script condiviso

document.addEventListener("DOMContentLoaded", function () {
  // Menu mobile
  var toggle = document.querySelector(".menu-toggle");
  var links = document.querySelector(".nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("aperto");
    });

    links.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        links.classList.remove("aperto");
      });
    });
  }

  // Form di contatto: gestione invio (demo lato client, nessun backend collegato)
  var form = document.querySelector(".contatto-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var msg = form.querySelector(".form-msg");
      if (msg) {
        msg.textContent = "Grazie! Il tuo messaggio è pronto: collega il modulo a un servizio di invio email (es. Formspree, Netlify Forms) per riceverlo davvero.";
        msg.classList.add("mostra");
      }
      form.reset();
    });
  }

  // Header: ombra leggera dopo lo scroll
  var header = document.querySelector(".site-header");
  if (header) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 8) {
        header.style.boxShadow = "0 4px 16px rgba(0,0,0,0.06)";
      } else {
        header.style.boxShadow = "none";
      }
    });
  }
});
