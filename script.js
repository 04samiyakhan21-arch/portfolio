/* ===== NAVBAR HAMBURGER MENU ===== */
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

/* ===== TYPING EFFECT ===== */
const typingText = document.querySelector(".typing");
const words = ["Web Developer", "Python Programmer", "Tech Enthusiast", "Creative Coder"];
let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;

function type() {
  if (wordIndex >= words.length) wordIndex = 0;
  currentWord = words[wordIndex];

  if (isDeleting) {
    typingText.textContent = currentWord.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      wordIndex++;
      setTimeout(type, 500);
      return;
    }
  } else {
    typingText.textContent = currentWord.substring(0, charIndex++);
    if (charIndex > currentWord.length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
  }
  setTimeout(type, isDeleting ? 50 : 150);
}
type();

/* ===== SCROLL REVEAL ===== */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(reveal => {
    const windowHeight = window.innerHeight;
    const revealTop = reveal.getBoundingClientRect().top;
    const revealPoint = 100;

    if(revealTop < windowHeight - revealPoint){
      reveal.classList.add("active");
    }
  });
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* ===== SKILLS CIRCULAR ANIMATION ===== */
const skillCircles = document.querySelectorAll('.skill-circle');

function animateSkills() {
  skillCircles.forEach(circle => {
    const percent = circle.getAttribute('data-skill');
    const circleProgress = circle.querySelectorAll('circle')[1];
    const skillPercent = circle.querySelector('.skill-percent');
    const circleTop = circle.getBoundingClientRect().top;

    if(circleTop < window.innerHeight - 100 && !circle.classList.contains('active')){
      circle.classList.add('active');

      // Animate stroke
      const offset = 314 - (314 * percent) / 100;
      circleProgress.style.strokeDashoffset = offset;

      // Animate percentage count
      let count = 0;
      const interval = setInterval(() => {
        if(count < percent){
          count++;
          skillPercent.textContent = count + '%';
        } else {
          clearInterval(interval);
        }
      }, 20);
    }
  });
}
window.addEventListener('scroll', animateSkills);
animateSkills(); // run on load

/* ===== FLOATING BUBBLES ===== */
const bubblesContainer = document.querySelector(".bubbles");

for (let i = 0; i < 12; i++) {
  let span = document.createElement("span");

  // Random horizontal position
  span.style.left = Math.random() * 100 + "vw";

  // Random size
  let size = Math.random() * 20 + 10;
  span.style.width = size + "px";
  span.style.height = size + "px";

  // Random animation speed & delay
  span.style.animationDuration = 5 + Math.random() * 5 + "s";
  span.style.animationDelay = Math.random() * 5 + "s";

  bubblesContainer.appendChild(span);
}

/* ===== CONTACT FORM (EMAILJS) ===== */
const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  emailjs.sendForm('service_mucqob5', 'template_b1kado4', this)
    .then(() => {
      alert('Message sent successfully! 🌸');
      form.reset();
    }, (error) => {
      alert('Failed to send message. Try again!');
      console.error(error);
    });
});





