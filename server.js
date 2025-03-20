const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", require("./routes/routes"));

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

