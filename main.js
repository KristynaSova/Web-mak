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

// Smooth accordion animation (details/summary)
document.querySelectorAll('.accordion').forEach(accordion => {
  const summary = accordion.querySelector('summary');
  const body = accordion.querySelector('.accordion-body');
  if (!summary || !body) return;

  let currentAnim = null;

  summary.addEventListener('click', e => {
    e.preventDefault();

    // Zrušit probíhající animaci — odstraní i zmrazený fill-forwards stav
    if (currentAnim) {
      currentAnim.cancel();
      currentAnim = null;
    }

    if (!accordion.open) {
      accordion.setAttribute('open', '');
      const h = body.scrollHeight;
      currentAnim = body.animate(
        [
          { height: '0px', opacity: '0', transform: 'translateY(-6px)' },
          { height: h + 'px', opacity: '1', transform: 'translateY(0)' }
        ],
        { duration: 350, easing: 'cubic-bezier(0.4, 0, 0.2, 1)' }
      );
      currentAnim.onfinish = () => { currentAnim = null; };
    } else {
      const h = body.scrollHeight;
      currentAnim = body.animate(
        [
          { height: h + 'px', opacity: '1', transform: 'translateY(0)' },
          { height: '0px', opacity: '0', transform: 'translateY(-6px)' }
        ],
        { duration: 280, easing: 'cubic-bezier(0.4, 0, 0.2, 1)', fill: 'forwards' }
      );
      currentAnim.onfinish = () => {
        accordion.removeAttribute('open');
        currentAnim.cancel(); // Odstraní fill-forwards, aby příští otevření proběhlo čistě
        currentAnim = null;
      };
    }
  });
});

// ─── Web3Forms — access key ───────────────────────────────────────────────────
// Při předání webu klientovi zde změňte klíč (nový klíč na web3forms.com/create)
const WEB3FORMS_ACCESS_KEY = '5e67d880-8c37-4671-a2f1-e033277caa0a';

// ─── Kontaktní formulář ───────────────────────────────────────────────────────
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  const submitBtn = contactForm.querySelector('.form-submit');
  const feedback  = document.querySelector('#form-feedback');

  contactForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    // Botcheck — honeypot checkbox; boti ho zaškrtnou, lidi ne
    const botcheck = contactForm.querySelector('[name="botcheck"]');
    if (botcheck && botcheck.checked) return;

    // HTML5 validace — reportValidity zobrazí nativní chybové bublinky
    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }

    setSubmitting(true);
    hideFeedback();

    // Sestavit FormData ze všech polí formuláře
    const data = new FormData(contactForm);
    data.append('access_key', WEB3FORMS_ACCESS_KEY);
    data.append('subject',    'Nová poptávka — Farma Černý');
    // from_name vezme hodnotu z pole "firma", nebo jako zálohu "jmeno"
    data.append('from_name',  data.get('firma') || data.get('jmeno') || 'Farma Černý web');

    try {
      const res  = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body:   data,
      });
      const json = await res.json();

      if (json.success) {
        showFeedback('success', '✓ Děkujeme za Váš zájem! Ozveme se Vám co nejdříve.');
        contactForm.reset();
      } else {
        showFeedback('error', 'Odeslání se nepodařilo. Zkuste to prosím znovu nebo nás kontaktujte přímo na e-mail.');
      }
    } catch {
      showFeedback('error', 'Nastala chyba sítě. Zkontrolujte připojení a zkuste to znovu.');
    } finally {
      setSubmitting(false);
    }
  });

  function setSubmitting(loading) {
    submitBtn.disabled  = loading;
    submitBtn.innerHTML = loading
      ? '<i class="fas fa-spinner fa-spin"></i> Odesílám…'
      : '<i class="fas fa-paper-plane"></i> Odeslat poptávku';
  }

  function showFeedback(type, message) {
    feedback.textContent = message;
    feedback.className   = 'form-feedback form-feedback--' + type;
    feedback.style.display = 'block';
    feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function hideFeedback() {
    feedback.style.display = 'none';
    feedback.className     = '';
  }
}
