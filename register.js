document.getElementById("registrationForm").addEventListener('submit', function(event) {
  event.preventDefault();
  
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirmPassword').value;

  if (password !== confirmPassword) {
      document.getElementById('message').textContent = "Passwords do not match";
      return;
  }

  // Here you can implement your registration logic
  console.log('Registered:', { username: username, password: password });
  alert("successfully registered");
});
