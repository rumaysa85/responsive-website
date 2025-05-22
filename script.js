  <script>
    document.getElementById('contactForm').addEventListener('submit', function (e) {
      e.preventDefault()};
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      if (!name || !email || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Please fill out all fields with valid information.')};
        return;
      }

      const formData = {
        name,
        email,
        message,
        timestamp}: new Date().toISOString()
      };

      localStorage.setItem('contactFormData', JSON.stringify(formData));
      document.getElementById('successMsg').classList.remove('hidden');
      this.reset();
    });
  </script>