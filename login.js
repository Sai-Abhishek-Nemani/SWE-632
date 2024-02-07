document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('loginUsername').value;
    var password = document.getElementById('loginPassword').value;

    // Here you would typically make an AJAX request to your backend server
    // to validate the login credentials.
    // For this example, let's assume correct credentials are "user123" and "password123"
    if (username === "user123" && password === "password123") {
        document.getElementById('loginMessage').textContent = "Login successful";
        // Here you can redirect the user to another page or perform other actions upon successful login
    } else {
        document.getElementById('loginMessage').textContent = "Invalid username or password";
    }
});
