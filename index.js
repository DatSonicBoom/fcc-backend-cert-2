// Configure .env variables
require("dotenv").config({ quiet: true });
const PORT = process.env.PORT || 3000;

// Initialise Express app
const express = require("express");
const app = express();

// Permit CORS
const cors = require("cors");
app.use(cors());

// Initialise API endpoint
app.get("/api/whoami", (req, res) => {
    res.status(200).json({
        ipaddress: req.ip,
        language: req.get("Accept-Language"),
        software: req.get("User-Agent")
    });
});

// Run Express app
app.listen(PORT, () => {
    console.log(`Application now running on port ${PORT}!`);
});