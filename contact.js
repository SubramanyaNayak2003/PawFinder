// Get pet name from URL if present
const urlParams = new URLSearchParams(window.location.search);
const petName = urlParams.get('pet');

// Pre-fill pet interest if coming from pet detail page
if (petName) {
    document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('petInterest').value = petName;
        document.getElementById('subject').value = 'adoption';
    });
}

// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        petInterest: document.getElementById('petInterest').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    // Simulate form submission
    console.log('Form submitted:', formData);

    // Show success message
    document.getElementById('formSuccess').style.display = 'flex';
    document.getElementById('formError').style.display = 'none';

    // Reset form
    this.reset();

    // Hide success message after 5 seconds
    setTimeout(() => {
        document.getElementById('formSuccess').style.display = 'none';
    }, 5000);
});