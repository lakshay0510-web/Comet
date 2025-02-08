document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission
        
        let formData = new FormData(this);

        fetch("https://formspree.io/f/xzzdvjga", { // Replace with your Formspree URL
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json"
            }
        })
        .then(response => {
            if (response.ok) {
                document.getElementById("responseMessage").innerText = "Message sent successfully!";
                document.getElementById("contactForm").reset();
            } else {
                document.getElementById("responseMessage").innerText = "Something went wrong. Try again.";
            }
        })
        .catch(error => {
            document.getElementById("responseMessage").innerText = "Error: " + error;
        });
    });
});
