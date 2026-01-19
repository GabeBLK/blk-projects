let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.dot');

function showTestimonial(index) {
  testimonials.forEach((t,i)=>t.classList.remove('active'));
  dots.forEach((d,i)=>d.classList.remove('active'));
  testimonials[index].classList.add('active');
  dots[index].classList.add('active');
  currentTestimonial = index;
}

// Auto-slide every 5 seconds
setInterval(()=>{
  currentTestimonial = (currentTestimonial+1)%testimonials.length;
  showTestimonial(currentTestimonial);
},5000);

// ---------------- Hamburger Menu ----------------
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
