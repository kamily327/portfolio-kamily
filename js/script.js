const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const menuLinks = document.querySelectorAll('#mobile-menu a')
menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
   
});
menuLinks.forEach(link =>{
   link.addEventListener('click' , () =>{
      mobileMenu.classList.add("hidden");
   })
})

const reveals = document.querySelectorAll(".scroll-reveal");
function revealOnScroll() {
  reveals.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

const backToTop = document.getElementById("back-to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.remove("hidden");
  } else {
    backToTop.classList.add("hidden");
  }
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
