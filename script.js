// Get the form and result elements
const form = document.getElementById('myForm');
const resultDiv = document.getElementById('result');

// Add an event listener to the form
form.addEventListener('submit', (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Get the name and email input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Validate the input values
    if (name === '' || email === '') {
        resultDiv.textContent = 'Please fill out both fields.';
        resultDiv.style.color = 'red';
    } else if (!email.includes('@')) {
        resultDiv.textContent = 'Please enter a valid email address.';
        resultDiv.style.color = 'red';
    } else {
        // Display a success message
        resultDiv.textContent = `Thank you, ${name}!`;
        resultDiv.style.color = 'green';
    }
});
