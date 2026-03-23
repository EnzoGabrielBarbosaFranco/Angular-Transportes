/* ============================================================
   ANGULAR TRANSPORTES PREMIUM — main.js
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Header scroll effect ──────────────────────────────── */
  const header = document.getElementById('header');
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
    updateActiveNav();
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ── Mobile menu ──────────────────────────────────────── */
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileNav.classList.toggle('open');
  });

  // Close on link click
  document.querySelectorAll('.mobile-nav a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileNav.classList.remove('open');
    });
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (!header.contains(e.target) && !mobileNav.contains(e.target)) {
      hamburger.classList.remove('open');
      mobileNav.classList.remove('open');
    }
  });

  /* ── Active nav link on scroll ────────────────────────── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a[href^="#"], .mobile-nav a[href^="#"]');

  function updateActiveNav() {
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 100;
      if (window.scrollY >= top) current = section.getAttribute('id');
    });
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
    });
  }

  /* ── Smooth scroll offset for fixed header ────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY
                  - parseInt(getComputedStyle(document.documentElement)
                  .getPropertyValue('--header-h'));
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ── Scroll reveal ────────────────────────────────────── */
  const reveals = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => revealObserver.observe(el));

  /* ── Counter animation ────────────────────────────────── */
  const counters = document.querySelectorAll('[data-count]');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.getAttribute('data-count'));
      const suffix = el.getAttribute('data-suffix') || '';
      const duration = 1800;
      const start = Date.now();
      const tick = () => {
        const elapsed = Date.now() - start;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(ease * target) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
        else el.textContent = target + suffix;
      };
      tick();
      counterObserver.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(el => counterObserver.observe(el));

  /* ── Contact form submit ──────────────────────────────── */
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const nome = form.querySelector('[name="nome"]').value.trim();
      const tel  = form.querySelector('[name="telefone"]').value.trim();
      const serv = form.querySelector('[name="servico"]').value;
      const msg  = form.querySelector('[name="mensagem"]').value.trim();

      if (!nome || !tel) {
        showToast('Preencha nome e telefone!', 'error');
        return;
      }

      const text = `Olá! Vim pelo site da Angular Transportes.%0A%0A*Nome:* ${encodeURIComponent(nome)}%0A*Telefone:* ${encodeURIComponent(tel)}%0A*Serviço:* ${encodeURIComponent(serv || 'Não informado')}%0A*Mensagem:* ${encodeURIComponent(msg || '-')}`;
      window.open(`https://wa.me/5567999399900?text=${text}`, '_blank');
      showToast('Redirecionando para o WhatsApp! 🚀', 'success');
    });
  }

  /* ── Toast notification ───────────────────────────────── */
  function showToast(message, type = 'success') {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.cssText = `
      position: fixed; bottom: 5.5rem; right: 2rem; z-index: 9999;
      background: ${type === 'success' ? '#25D366' : '#e53e3e'};
      color: white; padding: .8rem 1.4rem;
      border-radius: 10px; font-family: var(--font-display, sans-serif);
      font-weight: 700; font-size: .95rem; letter-spacing: .04em;
      box-shadow: 0 8px 24px rgba(0,0,0,.2);
      animation: toastIn .3s ease;
    `;
    document.body.appendChild(toast);
    setTimeout(() => { toast.style.opacity = '0'; toast.style.transition = 'opacity .4s'; }, 3000);
    setTimeout(() => toast.remove(), 3500);
  }

  const style = document.createElement('style');
  style.textContent = `@keyframes toastIn { from { transform: translateY(10px); opacity:0; } to { transform:translateY(0); opacity:1; } }`;
  document.head.appendChild(style);

});