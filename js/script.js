// Hiệu ứng hover cho menu
const menuLinks = document.querySelectorAll('.menu a');
menuLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.transform = 'scale(1.1)';
  });
  link.addEventListener('mouseleave', () => {
    link.style.transform = 'scale(1)';
  });
});
