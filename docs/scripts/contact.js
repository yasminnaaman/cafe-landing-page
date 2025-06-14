document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMsg = document.getElementById("formMsg");

  if (!name || !email || !message) {
    formMsg.textContent = "Please fill in all fields.";
    formMsg.style.color = "red";
    formMsg.classList.remove("hidden");
    return;
  }

  formMsg.textContent = "Thanks for reaching out! We'll get back to you soon.";
  formMsg.style.color = "green";
  formMsg.classList.remove("hidden");

  // Optional: clear form
  this.reset();
});
