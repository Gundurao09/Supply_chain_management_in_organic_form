function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  // Replace with your actual email and password validation logic
  if (email === "gundu@gmail.com" && password === "1234") {
    alert("Login successful!");

    // Clear input fields
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";

    window.location.href = "k3.html"; // Redirect to the welcome page
  } else if (email === "hanu@gmail.com" && password === "1234") {
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    alert("Login successful!");

    // Clear input fields

    window.location.href = "k3.html"; // Redirect to the welcome page
  } else if (email === "mani@gmail.com" && password === "1234") {
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    alert("Login successful!");

    // Clear input fields

    window.location.href = "k3.html";
  } else if (email === "vikas@gmail.com" && password === "1234") {
    alert("Login successful!");

    // Clear input fields
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";

    window.location.href = "k3.html";
  } else {
    alert("Invalid email or password");
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
  }
}
