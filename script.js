// Smooth Scroll Effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Call-to-Action Button Alert
  document.getElementById('cta-button').addEventListener('click', () => {
    alert('Thank you for getting started with us!');
  });
