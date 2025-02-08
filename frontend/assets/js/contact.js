document.addEventListener("DOMContentLoaded", function () {
    let contactForm = document.getElementById("contactForm");

    if (contactForm) {  // ✅ Check if the form exists before adding an event listener
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
                    document.getElementById("responseMessage").innerText = "Message sent successfully!";
                    contactForm.reset();
                } else {
                    document.getElementById("responseMessage").innerText = "Something went wrong. Try again.";
                }
            })
            .catch(error => {
                document.getElementById("responseMessage").innerText = "Error: " + error;
            });
        });
    } else {
        console.warn("⚠️ Contact form not found on this page.");
    }
});
