document.addEventListener('DOMContentLoaded', function() {
  // قائمة الجوال
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
  });

  // تأثيرات AOS
  AOS.init({
      duration: 1000,
      once: true
  });

  // تأثير المؤشر
  const cursor = document.querySelector('.cursor');
  document.addEventListener('mousemove', function(e) {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
  });
});