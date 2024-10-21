document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Here you can handle form submission, e.g., send data to a server
    alert('Thank you for your booking request! We will get back to you soon.');
    this.reset(); // Reset the form
});
