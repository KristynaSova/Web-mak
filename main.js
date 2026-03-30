// Hamburger menu toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const headerEl = document.querySelector("header");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("active");
    navLinks.classList.toggle("open");
    headerEl.classList.toggle("menu-open");
    document.body.style.overflow = navLinks.classList.contains("open") ? "hidden" : "";
  });

  navLinks.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.classList.remove("active");
      navLinks.classList.remove("open");
      headerEl.classList.remove("menu-open");
      document.body.style.overflow = "";
    });
  });
}

// Language switcher toggle
const langSwitcher = document.getElementById('langSwitcher');
if (langSwitcher) {
  const langBtn = langSwitcher.querySelector('.lang-current');
  langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = langSwitcher.classList.toggle('open');
    langBtn.setAttribute('aria-expanded', isOpen);
  });
  document.addEventListener('click', () => {
    langSwitcher.classList.remove('open');
    langBtn.setAttribute('aria-expanded', 'false');
  });
}

// Header scroll effect
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  const langSwitcherEl = document.getElementById("langSwitcher");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
    if (langSwitcherEl) langSwitcherEl.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
    if (langSwitcherEl) langSwitcherEl.classList.remove("scrolled");
  }
});

// Typografické opravy – jednopísmenné předložky a spojky nesmí zůstat na konci řádku
function fixOrphans() {
  const selector = 'p, li, h1, h2, h3, h4, td, th, figcaption';
  document.querySelectorAll(selector).forEach(el => {
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null);
    const textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);
    textNodes.forEach(node => {
      // Nahraď mezeru za jednopísmennou předložkou/spojkou nedělitelnou mezerou
      node.textContent = node.textContent.replace(
        /(^|\s)([aAiIvVzZkKsStTuUoO])\s/g,
        '$1$2\u00A0'
      );
    });
  });
}
document.addEventListener('DOMContentLoaded', fixOrphans);

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll(
  ".bento-item, .section-title, .section-subtitle, .product-info, .history-content, .export-content, .glass-dark",
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
  },
);

revealElements.forEach((el) => {
  el.classList.add("reveal-init");
  revealObserver.observe(el);
});

// Contact Form Honeypot & Formspree (placeholder logic)
const contactForm = document.querySelector("#contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    const honeypot = document.querySelector("#honeypot").value;
    if (honeypot) {
      e.preventDefault();
      console.log("Spam detected");
      return;
    }
  });
}
