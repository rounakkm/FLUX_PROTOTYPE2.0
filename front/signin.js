document.getElementById("signin-form").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form default behavior
  
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
  
    if (email && password) {
      // You can validate credentials here if needed
      window.location.href = "flux.html"; // Redirect to flux.html
    } else {
      alert("Please fill in both fields.");
    }
  });
  