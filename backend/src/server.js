const express = require("express");
const cors = require("cors"); // Import CORS module
const multer = require("multer");
const path = require("path");
const bodyParser = require("body-parser");
const positionsRouter = require("./routes/positions");

const app = express();
const PORT = process.env.PORT || 3041;

// Middleware for parsing JSON bodies
app.use(bodyParser.json());

// Middleware for handling file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "images"));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});
const upload = multer({ storage });

// CORS middleware
app.use(cors());

// Routes
app.use("/api/positions", positionsRouter);

// Serve static files (images)
app.use("/images", express.static(path.join(__dirname, "images")));

// Error handling middleware (optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
