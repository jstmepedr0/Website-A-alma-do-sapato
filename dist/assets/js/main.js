(() => {
  'use strict';

  /* ===== YEAR ===== */
  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  /* ===== ACTIVE NAV ===== */
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.site-nav a').forEach((link) => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('is-active');
    }
  });

  /* ===== MOBILE MENU ===== */
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      toggle.classList.toggle('is-active', open);
      toggle.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        toggle.classList.remove('is-active');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  /* ===== HEADER SCROLL ===== */
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('is-scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ===== SCROLL REVEAL ===== */
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    reveals.forEach((el) => observer.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('is-visible'));
  }

  /* ===== HERO SPLIT SLIDER ===== */
  const heroSplit = document.querySelector('.hero-split');
  if (heroSplit) {
    const slides      = heroSplit.querySelectorAll('.hero-slide');
    const texts       = heroSplit.querySelectorAll('.hero-text');
    const dots        = heroSplit.querySelectorAll('.hero-dot');
    const progressBar = heroSplit.querySelector('.hero-progress-bar');
    const counterEl   = heroSplit.querySelector('.hero-counter-current');
    const DURATION    = 5000;
    let current = 0;
    let timer   = null;

    function goTo(idx) {
      slides[current].classList.remove('is-active');
      texts[current]?.classList.remove('is-active');
      dots[current]?.classList.remove('is-active');

      current = ((idx % slides.length) + slides.length) % slides.length;

      slides[current].classList.add('is-active');
      texts[current]?.classList.add('is-active');
      dots[current]?.classList.add('is-active');

      if (current === 0) {
        document.body.classList.remove('hero-nav-white');
      } else {
        document.body.classList.add('hero-nav-white');
      }

      if (counterEl) counterEl.textContent = String(current + 1).padStart(2, '0');

      // Reset & animate progress bar
      if (progressBar) {
        progressBar.style.transition = 'none';
        progressBar.style.width = '0%';
        requestAnimationFrame(() => requestAnimationFrame(() => {
          progressBar.style.transition = `width ${DURATION}ms linear`;
          progressBar.style.width = '100%';
        }));
      }
    }

    function startAuto() {
      clearInterval(timer);
      timer = setInterval(() => goTo(current + 1), DURATION);
    }

    // Boot
    goTo(0);
    startAuto();

    // Dot clicks
    dots.forEach((dot, i) => dot.addEventListener('click', () => { goTo(i); startAuto(); }));

    // Pause on hover
    heroSplit.addEventListener('mouseenter', () => clearInterval(timer));
    heroSplit.addEventListener('mouseleave', startAuto);

    // Keyboard arrows
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft')  { goTo(current - 1); startAuto(); }
      if (e.key === 'ArrowRight') { goTo(current + 1); startAuto(); }
    });

    // Touch swipe
    let touchX = 0;
    heroSplit.addEventListener('touchstart', (e) => { touchX = e.touches[0].clientX; }, { passive: true });
    heroSplit.addEventListener('touchend', (e) => {
      const dx = e.changedTouches[0].clientX - touchX;
      if (Math.abs(dx) > 40) { goTo(dx < 0 ? current + 1 : current - 1); startAuto(); }
    });
  }

  /* ===== CONTACT FORM ===== */
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const original = btn.textContent;
      btn.textContent = 'Mensagem enviada (demo)';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = original;
        btn.disabled = false;
        form.reset();
      }, 2500);
    });
  }
})();
