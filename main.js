// Custom cursor effect
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'scale(1.4)';
    cursor.style.background = '#0077b6';
    cursor.style.borderColor = '#023e8a';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'scale(1)';
    cursor.style.background = 'transparent';
    cursor.style.borderColor = '#0077b6';
  });
});

// Smooth scroll for nav links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.hash !== "") {
      e.preventDefault();
      const hash = this.hash;
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
