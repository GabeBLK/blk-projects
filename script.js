// ================= MOBILE HAMBURGER =================
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// ================= TESTIMONIAL SLIDER =================
let testimonialIndex = 0;
const testimonials = document.querySelectorAll(".testimonial");
const dots = document.querySelectorAll(".dot");

function showTestimonial(index) {
  testimonials.forEach((t, i) => {
    t.classList.remove("active");
    dots[i].classList.remove("active");
  });
  testimonials[index].classList.add("active");
  dots[index].classList.add("active");
  testimonialIndex = index;
}

// Auto-slide every 5 seconds
setInterval(() => {
  testimonialIndex = (testimonialIndex + 1) % testimonials.length;
  showTestimonial(testimonialIndex);
}, 5000);

// ================= SCROLL ANIMATIONS =================
const animatedElements = document.querySelectorAll(".animate-on-scroll");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("fade-in");
    }
  });
}, {threshold: 0.1});

animatedElements.forEach(el => observer.observe(el));
