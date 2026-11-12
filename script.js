// Chromaunfurl privacy page: local visual interactions only.
// This file has no analytics, cookies, tracking, network requests, or external dependencies.
(() => {
  "use strict";
  const progress = document.getElementById("readingProgress");
  const topButton = document.getElementById("toTop");
  const tocLinks = [...document.querySelectorAll('#tocNav a[href^="#"]')];
  const sections = tocLinks.map(a => document.querySelector(a.getAttribute("href"))).filter(Boolean);

  function updateOnScroll() {
    const root = document.documentElement;
    const scrollMax = Math.max(1, root.scrollHeight - window.innerHeight);
    progress.style.width = `${Math.min(100, Math.max(0, window.scrollY / scrollMax * 100))}%`;
    topButton.classList.toggle("show", window.scrollY > 450);

    let current = sections[0]?.id;
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= 145) current = section.id;
    }
    for (const link of tocLinks) {
      const active = link.getAttribute("href") === `#${current}`;
      link.classList.toggle("active", active);
      if (active) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    }
  }
  let scheduled = false;
  window.addEventListener("scroll", () => {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(() => { updateOnScroll(); scheduled = false; });
  }, { passive: true });
  window.addEventListener("resize", updateOnScroll);
  topButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  });
  updateOnScroll();
})();
