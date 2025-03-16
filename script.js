document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const message = document.getElementById("message");

  if (name === "" || email === "" || password === "" || confirmPassword === "") {
    message.textContent = "All fields are required!";
    return;
  }

  if (password !== confirmPassword) {
    message.textContent = "Passwords do not match!";
    return;
  }

  message.style.color = "green";
  message.textContent = "Registration successful!";
  
  // You can add code to send data to the server here
});
