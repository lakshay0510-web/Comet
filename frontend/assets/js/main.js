document.addEventListener("DOMContentLoaded", function () {
    fetch("http://localhost:3000/api/projects")
        .then(response => response.json())
        .then(data => {
            const projectsContainer = document.getElementById("projects");
            projectsContainer.innerHTML = ""; // Clear previous content
            data.forEach(project => {
                const projectElement = document.createElement("div");
                projectElement.classList.add("project");
                projectElement.innerHTML = `
                    <h3>${project.name}</h3>
                    <p>${project.description}</p>
                    <small>Project ID: ${project.id}</small>
                `;
                projectsContainer.appendChild(projectElement);
            });
        })
        .catch(error => console.error("Error fetching projects:", error));
});
document.addEventListener("DOMContentLoaded", function () {
    const testimonials = [
        { text: "This platform has transformed my meditation practice! Highly recommended!", name: "John Doe" },
        { text: "The spiritual guidance here is life-changing. Beautifully crafted sessions!", name: "Sarah Smith" },
        { text: "A perfect blend of wisdom and mindfulness. The best investment in myself!", name: "Michael Lee" }
    ];

    let testimonialContainer = document.querySelector(".testimonial-container");

    testimonials.forEach((testimonial) => {
        let div = document.createElement("div");
        div.classList.add("testimonial");
        div.innerHTML = `
            <p>"${testimonial.text}"</p>
            <h4>- ${testimonial.name}</h4>
            <div class="stars">⭐⭐⭐⭐⭐</div>
        `;
        testimonialContainer.appendChild(div);
    });
});
document.querySelector(".contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for reaching out! We'll get back to you soon.");
});
