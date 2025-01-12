document.getElementById('optinForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent default form submission

    // Form fields
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const disclaimer = document.getElementById('disclaimer').checked;

    // Validation
    if (!name || !email || !phone || !disclaimer) {
        alert('Please fill in all fields and agree to the legal disclaimer.');
        return;
    }

    // Basic email format check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Updated phone number validation for only digits, with any length
    const phonePattern = /^\d+$/;
    if (!phonePattern.test(phone)) {
        alert('Please enter a valid phone number with only digits.');
        return;
    }

    // Data to be sent
    const formData = {
        name: name,
        email: email,
        phone: phone,
        disclaimer: disclaimer
    };

    try {
        // Sending POST request using axios
        const response = await axios.post('/submit-optin', formData);
        
        // Handle success response
        alert('Form submitted successfully!');
        console.log('Success:', response.data);

        // Reset the form
        document.getElementById('optinForm').reset();
    } catch (error) {
        // Handle error response
        alert('There was an error submitting the form. Please try again.');
        console.error('Error:', error);
    }
});
