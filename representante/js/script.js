const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close-modal");

if (window.innerWidth > 900) {
  document.querySelectorAll(".carousel-track img").forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImg.src = img.src;
    });
  });
}

closeBtn.onclick = () => (modal.style.display = "none");
modal.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") modal.style.display = "none";
});

// Header sombra ao rolar
const siteHeader = document.getElementById("siteHeader");
window.addEventListener(
  "scroll",
  () => siteHeader.classList.toggle("header--scrolled", window.scrollY > 8),
  { passive: true }
);

// Stagger nos cards
document.querySelectorAll(".cards").forEach((group) => {
  group.querySelectorAll(".card").forEach((card, i) => {
    card.setAttribute("data-reveal", "");
    card.style.transitionDelay = `${i * 0.1}s`;
  });
});

// Scroll reveal
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
);

document.querySelectorAll("[data-reveal]").forEach((el) =>
  revealObserver.observe(el)
);
