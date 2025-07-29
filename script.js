// Wait until DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Update year in footer
  const yearSpan = document.getElementById('year');
  const currentYear = new Date().getFullYear();
  if (yearSpan) {
    yearSpan.textContent = currentYear;
  }

  // Handle contact form submission
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent actual form submission
      // Show success message and clear the form
      formSuccess.style.display = 'block';
      contactForm.reset();
      // Hide success message after a few seconds
      setTimeout(() => {
        formSuccess.style.display = 'none';
      }, 4000);
    });
  }
});