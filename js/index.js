// ---------- mobile nav toggle ----------
const mobileNavBtn = document.querySelector(".navbar-icon-btn");
const navbar = document.querySelector(".navbar");

mobileNavBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// close mobile menu when a link is clicked
document.querySelectorAll(".navbar-links").forEach((link) => {
  link.addEventListener("click", () => navbar.classList.remove("active"));
});

// ---------- navbar style + top button on scroll ----------
const topBtn = document.querySelector(".top-btn");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("active1", window.scrollY >= 80);
  topBtn.classList.toggle("active-btn-top", window.scrollY >= 400);
});

// ---------- scroll reveal ----------
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

// ---------- animated counters ----------
const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      counterObserver.unobserve(el);

      const target = +el.dataset.target;
      const duration = 1600;
      const start = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        el.textContent = Math.round(target * eased).toLocaleString();
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  },
  { threshold: 0.6 }
);

document.querySelectorAll(".counter").forEach((el) => counterObserver.observe(el));

// ---------- testimonials carousel ----------
new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  autoplay: {
    delay: 3500,
    pauseOnMouseEnter: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    700: { slidesPerView: 2 },
    1100: { slidesPerView: 3 },
  },
});
