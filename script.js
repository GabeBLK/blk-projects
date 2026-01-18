/* ---------------- GLOBAL ---------------- */
* {box-sizing:border-box;margin:0;padding:0;}
body {font-family: 'Roboto', sans-serif;line-height:1.6;color:#333;background:#f5f5f5;}
h1,h2,h3,.logo-text {font-family:'Montserrat',sans-serif;color:#000;}
a {color:#e63946;text-decoration:none;transition:color 0.3s;}
a:hover {color:#b22222;}
section {scroll-margin-top:90px;}

/* ---------------- STICKY NAV ---------------- */
.sticky-nav {position:sticky;top:0;width:100%;background:#000;z-index:9999;box-shadow:0 2px 6px rgba(0,0,0,0.3);}
.nav-container {max-width:1200px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;padding:10px 20px;}
.nav-logo {font-weight:700;font-size:1.5rem;color:#fff;}
.nav-logo .red-plus {color:#e63946;margin-left:5px;}
.nav-links {list-style:none;display:flex;gap:30px;}
.nav-links li a {font-weight:500;color:#fff;}
.nav-links li a:hover {color:#e63946;}
@media(max-width:768px){.nav-container{flex-direction:column;align-items:flex-start;}.nav-links{flex-direction:column;gap:10px;width:100%;}}

/* ---------------- HERO ---------------- */
.hero {background:#000;color:#fff;padding:120px 20px;text-align:center;}
.logo-text {font-size:3rem;font-weight:700;}
.red-plus {color:#e63946;margin-left:5px;}
.hero-tagline {margin:15px 0 30px;font-size:1.2rem;}
.hero-btn {display:inline-block;background:#e63946;color:#fff;padding:14px 30px;border-radius:6px;font-weight:bold;transition:background 0.3s;}
.hero-btn:hover {background:#b22222;}

/* ---------------- ABOUT ---------------- */
.about {background:#fff;padding:80px 20px;text-align:center;}
.about-title {font-size:2rem;font-weight:700;margin-bottom:25px;}
.about-text {max-width:720px;margin:0 auto;}
.about-text p {margin-bottom:18px;font-size:1.05rem;line-height:1.8;}

/* ---------------- SERVICES ---------------- */
.services {padding:80px 20px;background:#f5f5f5;text-align:center;}
.services h2 {font-size:2rem;font-weight:700;margin-bottom:50px;}
.services-grid {display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:20px;max-width:1000px;margin:0 auto;}
.service-card {background:#fff;padding:25px;border-radius:8px;box-shadow:0 4px 10px rgba(0,0,0,0.1);text-align:center;}
.service-card h3 {margin-bottom:10px;}

/* ---------------- GALLERY ---------------- */
#gallery {background:#fff;padding:80px 20px;}
.gallery-grid {display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:20px;max-width:1000px;margin:0 auto;}
.gallery-item {background:#f5f5f5;padding:40px;border-radius:8px;text-align:center;box-shadow:0 2px 6px rgba(0,0,0,0.1);transition:transform 0.3s;}
.gallery-item:hover {transform:scale(1.05);}

/* ---------------- TESTIMONIALS ---------------- */
.testimonial-slider {display:flex;justify-content:center;align-items:center;padding:60px 20px;background:#f8f8f8;}
.slider-container {max-width:700px;width:100%;text-align:center;position:relative;}
.testimonial {display:none;background:#fff;padding:35px 30px;border-radius:14px;box-shadow:0 8px 25px rgba(0,0,0,0.08);}
.testimonial.active {display:block;}
.testimonial-text {font-size:1.1rem;line-height:1.7;font-style:italic;margin-bottom:20px;color:#333;}
.testimonial-author {font-weight:600;color:#555;font-size:0.95rem;}
.dots {margin-top:20px;}
.dot {height:12px;width:12px;background:#ccc;border-radius:50%;display:inline-block;margin:0 6px;cursor:pointer;transition:background 0.3s;}
.dot.active {background:#333;}

/* ---------------- ENQUIRY ---------------- */
.enquiry-section {background:#fff;padding:80px 20px;text-align:center;}
.enquiry-section h2 {font-size:2rem;font-weight:700;margin-bottom:20px;}
.enquiry-form {max-width:600px;margin:0 auto;display:flex;flex-direction:column;gap:15px;}
.enquiry-form input,.enquiry-form select,.enquiry-form textarea {padding:12px;border:1px solid #ccc;border-radius:6px;font-family:'Roboto',sans-serif;}
.enquiry-form button {background:#e63946;color:#fff;padding:12px;font-weight:600;border:none;border-radius:6px;cursor:pointer;transition:background 0.3s;}
.enquiry-form button:hover {background:#b22222;}

/* ---------------- CONTACT ---------------- */
.contact {background:#fff;padding:80px 20px;text-align:center;}
.contact h2 {margin-bottom:20px;font-weight:700;}
.contact p {margin-bottom:10px;font-size:1rem;}
.contact a {color:#e63946;}
.contact a:hover {color:#b22222;}

/* ---------------- FOOTER ---------------- */
.site-footer {background:#000;color:#fff;text-align:center;padding:25px 15px;font-size:0.9rem;}
.site-footer .licence {margin-top:8px;color:#ccc;}
.site-footer .pending {color:#e63946;font-weight:bold;}

/* ---------------- RESPONSIVE ---------------- */
@media(max-width:600px){
  .hero .logo-text {font-size:2rem;}
  .about-title {font-size:1.6rem;}
}
