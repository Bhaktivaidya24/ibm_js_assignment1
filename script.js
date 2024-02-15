const form = document.getElementById('create-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  // Basic validation
  if (!name || !email) {
    alert('Please fill in all fields');
    return;
  }

  // Additional validation (e.g., email format) can be added here

  // Store data (replace with your storage logic)
  localStorage.setItem('user', JSON.stringify({ name, email }));

  // Redirect or display success message
});