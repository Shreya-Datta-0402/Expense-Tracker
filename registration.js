

// User registration function
function registerUser(event) {
    event.preventDefault(); // Prevent form submission


    // Get form values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Save user data to localStorage (you can replace this with a backend implementation)
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Registration successful! You can now log in.");
    document.getElementById("registrationForm").reset();
}
// User authentication function
function authenticateUser(event) {
    event.preventDefault(); // Prevent form submission


    // Get form values
    var loginUsername = document.getElementById("loginUsername").value;
    var loginPassword = document.getElementById("loginPassword").value;

    // Retrieve user data from localStorage
    var username = localStorage.getItem("username");
    var password = localStorage.getItem("password");

    // Check if the entered username and password match the stored data
    if (loginUsername === username && loginPassword === password) {
        alert("Authentication successful! You are now logged in.");
        document.getElementById("loginForm").reset();
    } else {
        alert("Invalid username or password. Please try again.");
    }
}
