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
document.addEventListener('DOMContentLoaded', () => {
  const logo = document.querySelector('.logo-text');
  logo.classList.add('fade-in'); // ensures animation triggers
});
const form = document.querySelector('.enquiry-form');
const successMsg = document.querySelector('.form-success');

form.addEventListener('submit', function(e) {
  // small delay to let Formspree send the email
  setTimeout(() => {
    successMsg.style.display = 'block'; // show confirmation
    form.reset(); // clear the form
  }, 500);
});
