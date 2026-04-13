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

  /* ===== HERO SLIDER ===== */
  const heroSlider = document.querySelector('[data-hero-slider]');
  if (heroSlider) {
    const slides = Array.from(heroSlider.querySelectorAll('[data-hero-slide]'));
    const dots = Array.from(heroSlider.querySelectorAll('[data-hero-dot]'));
    const prevBtn = heroSlider.querySelector('[data-hero-prev]');
    const nextBtn = heroSlider.querySelector('[data-hero-next]');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let currentIndex = slides.findIndex((slide) => slide.classList.contains('is-active'));
    let autoRotate = null;

    if (currentIndex < 0) currentIndex = 0;

    const setSlide = (index) => {
      currentIndex = (index + slides.length) % slides.length;

      slides.forEach((slide, slideIndex) => {
        const active = slideIndex === currentIndex;
        slide.classList.toggle('is-active', active);
        slide.setAttribute('aria-hidden', String(!active));
      });

      dots.forEach((dot, dotIndex) => {
        const active = dotIndex === currentIndex;
        dot.classList.toggle('is-active', active);
        dot.setAttribute('aria-current', active ? 'true' : 'false');
      });
    };

    const startAutoRotate = () => {
      if (prefersReducedMotion || slides.length < 2) return;
      clearInterval(autoRotate);
      autoRotate = window.setInterval(() => {
        setSlide(currentIndex + 1);
      }, 5500);
    };

    const stopAutoRotate = () => {
      clearInterval(autoRotate);
    };

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        setSlide(index);
        startAutoRotate();
      });
    });

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        setSlide(currentIndex - 1);
        startAutoRotate();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        setSlide(currentIndex + 1);
        startAutoRotate();
      });
    }

    heroSlider.addEventListener('mouseenter', stopAutoRotate);
    heroSlider.addEventListener('mouseleave', startAutoRotate);
    heroSlider.addEventListener('focusin', stopAutoRotate);
    heroSlider.addEventListener('focusout', startAutoRotate);

    setSlide(currentIndex);
    startAutoRotate();
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
