document.addEventListener("DOMContentLoaded", () => {

    // Home Page
    const toggleBtn = document.getElementById("toggleMessage");
    const welcomeText = document.getElementById("welcomeMessage");

    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            if (welcomeText.style.display === "none" || welcomeText.style.display === "") {
                welcomeText.style.display = "block"; // Show the message if it's hidden
            }
        });
    }
    // Contact Page
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            if (!form.name.value || !form.email.value || !form.message.value) {
                alert("Please fill in all fields.");
            } else {
                alert("Message sent!");
                form.reset();
            }
        });
    }
});