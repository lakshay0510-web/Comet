const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Enable CORS
app.use(cors());

// Sample data for projects
const projects = [
    { id: 1, name: "Project A", description: "This is Project A" },
    { id: 2, name: "Project B", description: "This is Project B" }
];

// Define API route
app.get("/api/projects", (req, res) => {
    res.json(projects);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
