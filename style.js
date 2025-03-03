// Add event listeners to each portfolio item
document.querySelectorAll('.portfolio-header').forEach(item => {
    item.addEventListener('click', function() {
      const parent = this.closest('.portfolio-item');
      parent.classList.toggle('active');
    });
  });
  