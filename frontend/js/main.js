/* ══════════════════════════════════════════════════════
   LULÚ TAPIA — main.js
══════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initScrollAnimations();
  initPortfolioFilter();
  initContactForm();
  initNavHighlight();
  initLightbox();
});

/* ──────────────────────────────────────────────────────
   1. NAVEGACIÓN — menú hamburguesa
────────────────────────────────────────────────────── */
function initNav() {
  const hamburger = document.querySelector('.nav__hamburger');
  const menu = document.querySelector('.nav__menu');
  if (!hamburger || !menu) return;

  hamburger.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  // Cerrar menú al hacer click en un enlace
  menu.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  // Cerrar al hacer click fuera
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
}

/* ──────────────────────────────────────────────────────
   2. ANIMACIONES DE SCROLL — IntersectionObserver
────────────────────────────────────────────────────── */
function initScrollAnimations() {
  const targets = document.querySelectorAll('.animate-in');
  if (!targets.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // Delay escalonado para grupos de elementos
          const delay = entry.target.dataset.delay || 0;
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  // Añadir delays escalonados a elementos en el mismo bloque
  targets.forEach((el, i) => {
    const parent = el.parentElement;
    const siblings = parent
      ? [...parent.querySelectorAll('.animate-in')]
      : [];
    const idx = siblings.indexOf(el);
    if (idx > 0) el.dataset.delay = idx * 100;
    observer.observe(el);
  });
}

/* ──────────────────────────────────────────────────────
   3. FILTRO DEL PORTAFOLIO
────────────────────────────────────────────────────── */
function initPortfolioFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.port-card');
  if (!filterBtns.length || !cards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      // Actualizar botón activo
      filterBtns.forEach(b => b.classList.remove('filter-btn--active'));
      btn.classList.add('filter-btn--active');

      // Mostrar/ocultar tarjetas
      cards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = '';
          // Pequeña animación de entrada
          requestAnimationFrame(() => {
            card.style.opacity = '0';
            card.style.transform = 'scale(0.95)';
            requestAnimationFrame(() => {
              card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
              card.style.opacity = '1';
              card.style.transform = 'scale(1)';
            });
          });
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ──────────────────────────────────────────────────────
   4. FORMULARIO DE CONTACTO
────────────────────────────────────────────────────── */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const successMsg = document.getElementById('form-success');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const errors = validateForm(form);
    if (errors.length > 0) return;

    // Simular envío — en producción reemplazar con fetch() a un endpoint
    const submitBtn = form.querySelector('[type="submit"]');
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;

    setTimeout(() => {
      form.reset();
      submitBtn.textContent = 'Enviar mensaje';
      submitBtn.disabled = false;
      if (successMsg) {
        successMsg.hidden = false;
        successMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        setTimeout(() => { successMsg.hidden = true; }, 6000);
      }
    }, 900);
  });
}

function validateForm(form) {
  const fields = [
    { id: 'nombre',  errorId: 'nombre-error',  msg: 'Por favor ingresa tu nombre.' },
    { id: 'email',   errorId: 'email-error',   msg: 'Por favor ingresa un correo válido.' },
    { id: 'mensaje', errorId: 'mensaje-error', msg: 'Por favor escribe tu mensaje.' },
  ];

  let errors = [];

  fields.forEach(({ id, errorId, msg }) => {
    const input = document.getElementById(id);
    const errorEl = document.getElementById(errorId);
    if (!input || !errorEl) return;

    let invalid = false;
    if (id === 'email') {
      invalid = !input.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim());
    } else {
      invalid = !input.value.trim();
    }

    if (invalid) {
      errorEl.textContent = msg;
      input.setAttribute('aria-invalid', 'true');
      errors.push(id);
    } else {
      errorEl.textContent = '';
      input.removeAttribute('aria-invalid');
    }
  });

  if (errors.length) {
    const firstError = document.getElementById(errors[0]);
    if (firstError) firstError.focus();
  }

  return errors;
}

/* ──────────────────────────────────────────────────────
   5. LIGHTBOX — vista ampliada de piezas del portafolio
────────────────────────────────────────────────────── */
function initLightbox() {
  const lightbox  = document.getElementById('lightbox');
  const lbImg     = lightbox.querySelector('.lightbox__img');
  const lbCat     = lightbox.querySelector('.lightbox__cat');
  const lbName    = lightbox.querySelector('.lightbox__name');
  const lbClose   = lightbox.querySelector('.lightbox__close');
  const lbBackdrop = lightbox.querySelector('.lightbox__backdrop');

  function openLightbox(card) {
    const img  = card.querySelector('img');
    const cat  = card.querySelector('.port-card__cat');
    const name = card.querySelector('.port-card__name');

    lbImg.src    = img.src;
    lbImg.alt    = img.alt;
    lbCat.textContent  = cat  ? cat.textContent  : '';
    lbName.textContent = name ? name.textContent : '';

    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    lbClose.focus();
  }

  function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = '';
  }

  // Abrir al hacer clic en cualquier card del portafolio
  document.querySelectorAll('.port-card').forEach(card => {
    card.addEventListener('click', () => openLightbox(card));
    card.setAttribute('tabindex', '0');
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(card); }
    });
  });

  // Cerrar
  lbClose.addEventListener('click', closeLightbox);
  lbBackdrop.addEventListener('click', closeLightbox);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !lightbox.hidden) closeLightbox();
  });
}

/* ──────────────────────────────────────────────────────
   6. RESALTAR ENLACE ACTIVO EN NAVEGACIÓN (scroll spy)
────────────────────────────────────────────────────── */
function initNavHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link');
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach(link => {
            link.classList.toggle(
              'nav__link--active',
              link.getAttribute('href') === `#${id}`
            );
          });
        }
      });
    },
    { threshold: 0.35 }
  );

  sections.forEach(s => observer.observe(s));
}
