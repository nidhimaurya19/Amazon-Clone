function validateForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Basic email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Password validation
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }

    // You can add more validation here for your needs

    // If everything is fine, allow form submission (you can also handle form data here)
    alert("Form submitted successfully!");
    return true;
}
