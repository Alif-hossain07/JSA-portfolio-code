/* ===== JHILTULY SPORTS ASSOCIATION - script.js ===== */

/* ---- Navbar scroll effect ---- */
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const hamburger = document.getElementById('hamburger');
const navLinksEl = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  updateActiveLink();
  toggleBackToTop();
});

/* ---- Hamburger menu ---- */
if (hamburger && navLinksEl) {
  hamburger.addEventListener('click', () => {
    navLinksEl.classList.toggle('open');
    const spans = hamburger.querySelectorAll('span');
    if (navLinksEl.classList.contains('open')) {
      if (spans[0]) spans[0].style.transform = 'rotate(45deg) translate(5px,5px)';
      if (spans[1]) spans[1].style.opacity = '0';
      if (spans[2]) spans[2].style.transform = 'rotate(-45deg) translate(5px,-5px)';
    } else {
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  });
}

/* Close nav on link click */
if (navLinksEl) {
  navLinksEl.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinksEl.classList.remove('open');
      if (hamburger) hamburger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    });
  });
}

/* ---- Active nav link on scroll ---- */
const sections = document.querySelectorAll('section[id]');
function updateActiveLink() {
  let current = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - 100;
    if (window.scrollY >= top) current = sec.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
}

/* ---- Enhanced nav link interactivity ---- */
const navLinkElements = document.querySelectorAll('.nav-link');
navLinkElements.forEach(link => {
  link.addEventListener('mouseenter', (e) => {
    e.target.style.background = 'rgba(255,107,53,.15)';
  });
  link.addEventListener('mouseleave', (e) => {
    if (!e.target.classList.contains('active')) {
      e.target.style.background = '';
    }
  });
});

/* ---- Particle animation in hero ---- */
function createParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  const colors = ['#2ecc71', '#f39c12', '#3498db', '#9b59b6', '#e74c3c'];
  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 6 + 3;
    const left = Math.random() * 100;
    const delay = Math.random() * 12;
    const duration = Math.random() * 12 + 8;
    const color = colors[Math.floor(Math.random() * colors.length)];
    p.style.cssText = `
      width:${size}px; height:${size}px;
      left:${left}%; bottom:-20px;
      background:${color};
      animation-delay:${delay}s;
      animation-duration:${duration}s;
      filter:blur(${Math.random() > .5 ? '1px' : '0px'});
    `;
    container.appendChild(p);
  }
}
createParticles();

/* ---- Scroll reveal ---- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ---- Counter animation ---- */
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const duration = 1800;
  const start = performance.now();
  const step = (now) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target).toLocaleString();
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target.toLocaleString();
  };
  requestAnimationFrame(step);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.dataset.animated) {
      entry.target.dataset.animated = 'true';
      animateCounter(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-num, .hstat-num').forEach(el => counterObserver.observe(el));

/* ---- Event filter tabs ---- */
const tabs = document.querySelectorAll('.etab');
const eventCards = document.querySelectorAll('.event-card');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const filter = tab.dataset.filter;
    eventCards.forEach(card => {
      const sport = card.dataset.sport;
      const show = filter === 'all' || sport === filter;
      card.style.display = show ? 'flex' : 'none';
      if (show) {
        setTimeout(() => card.classList.add('visible'), 50);
      }
    });
  });
});

/* ---- Back to top button ---- */
const backToTopBtn = document.getElementById('backToTop');
function toggleBackToTop() {
  if (!backToTopBtn) return;
  backToTopBtn.classList.toggle('visible', window.scrollY > 400);
}
if (backToTopBtn) {
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ---- Contact form ---- */
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    if (btn) {
      btn.textContent = 'Sending...';
      btn.disabled = true;
    }
    setTimeout(() => {
      if (btn) {
        btn.textContent = 'Send Message 🚀';
        btn.disabled = false;
      }
      if (formSuccess) formSuccess.style.display = 'block';
      contactForm.reset();
      setTimeout(() => { if (formSuccess) formSuccess.style.display = 'none'; }, 5000);
    }, 1200);
  });
}

/* ---- Smooth scroll for anchor links ---- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const href = anchor.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ---- Gallery item hover tilt ---- */
document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('mousemove', (e) => {
    const rect = item.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
    item.style.transform = `perspective(600px) rotateY(${x}deg) rotateX(${y}deg) scale(1.03)`;
  });
  item.addEventListener('mouseleave', () => {
    item.style.transform = '';
  });
});

/* ---- Sport card glow on hover ---- */
document.querySelectorAll('.sport-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.boxShadow = '0 25px 60px rgba(255,107,53,.4)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.boxShadow = '';
  });
});

/* ---- Typing effect for hero tagline ---- */
(function typingEffect() {
  const el = document.querySelector('.hero-sub');
  if (!el) return;
  const originalText = el.textContent;
  el.textContent = '';
  el.style.opacity = '1';
  let i = 0;
  const timer = setTimeout(function type() {
    if (i < originalText.length) {
      el.textContent += originalText.charAt(i);
      i++;
      setTimeout(type, 22);
    }
  }, 600);
})();

/* ---- Enhanced hover effects with mouse tracking ---- */
document.querySelectorAll('.sport-card, .event-card, .testimonial-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 5;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 5;
    card.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${y}deg) scale(1.02)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

/* ---- Page load fade-in ---- */
document.body.style.opacity = '0';
const loader = document.getElementById('loader');
window.addEventListener('load', () => {
  document.body.style.transition = 'opacity 0.6s ease';
  document.body.style.opacity = '1';
  if (loader) loader.classList.add('hidden');
  if (typeof updateActiveLink === 'function') updateActiveLink();
});

console.log('%c⚽ Jhiltuly Sports Association %c| Built with passion for sport!',
  'color:#FF6B35;font-size:14px;font-weight:bold',
  'color:#8a9bb0;font-size:12px'
);
