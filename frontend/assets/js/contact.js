document.addEventListener("DOMContentLoaded", function () {
    let contactForm = document.getElementById("contactForm");

    if (!contactForm) {
        console.error("❌ ERROR: Form with ID 'contactForm' not found.");
        return; // Stop execution if form is missing
    }

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        let formData = new FormData(this);

        fetch("https://formspree.io/f/xzzdvjga", { // Replace with your actual Formspree ID
            method: "POST",
            body: formData,
            headers: { "Accept": "application/json" }
        })
        .then(response => {
            if (response.ok) {
                document.getElementById("responseMessage").innerText = "✅ Message sent successfully!";
                contactForm.reset();
            } else {
                document.getElementById("responseMessage").innerText = "❌ Something went wrong. Try again.";
            }
        })
        .catch(error => {
            document.getElementById("responseMessage").innerText = "❌ Error: " + error;
        });
    });
});
