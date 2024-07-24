const express = require("express");
const fs = require("fs");
const path = require("path");
const multer = require("multer");
const { readPositionsFromFile } = require("../utils/helpers");
const router = express.Router();
const dataFilePath = path.join(__dirname, "../data/data.json");

const uploadPath = path.join(__dirname, "../images");

// Ensure upload directory exists
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath);
}

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});
const upload = multer({ storage });

// Helper function to write positions to file
function writePositionsToFile(positions, callback) {
  fs.writeFile(dataFilePath, JSON.stringify(positions, null, 2), (err) => {
    if (err) {
      return callback(err);
    }
    callback(null);
  });
}

// Middleware to format date
function formatDate(date) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
}

// Middleware to handle errors
function errorHandler(err, req, res, next) {
  console.error("Error:", err);
  res.status(500).json({ error: "Internal Server Error" });
}

// GET all positions (filter out deleted or active positions based on query)
router.get("/", (req, res, next) => {
  readPositionsFromFile((err, positions) => {
    if (err) {
      return next(err);
    }

    const isDeleted = req.query.isDeleted;

    let filteredPositions = null;

    if (isDeleted === "true") {
      filteredPositions = positions.filter(
        (pos) => pos.isDeleted === isDeleted
      );
    } else {
      filteredPositions = positions.filter((pos) => pos.isDeleted !== "true");
    }
    res.json(filteredPositions);
  });
});

// GET a position by ID
router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  readPositionsFromFile((err, positions) => {
    if (err) {
      return next(err);
    }
    const position = positions.find((pos) => pos.id === id);
    if (!position) {
      return res.status(404).json({ error: "Position not found" });
    }
    res.json(position);
  });
});

// POST a new position with file upload
router.post("/", upload.array("images", 5), (req, res, next) => {
  const { body, files } = req;

  const createdDate = formatDate(new Date());
  const newPosition = {
    ...body,
    images: files && files.length ? files.map((file) => file.filename) : [],
    createdDate,
    id: Date.now().toString(), // Generate unique ID based on timestamp
  };

  readPositionsFromFile((err, positions) => {
    if (err) {
      return next(err);
    }
    positions.push(newPosition);
    writePositionsToFile(positions, (err) => {
      if (err) {
        return next(err);
      }
      res.status(201).json(newPosition);
    });
  });
});

// PUT update an existing position by ID
router.put("/:id", upload.array("images", 5), (req, res, next) => {
  const { id } = req.params;
  const { body, files } = req;
  let deleteImages = body.deleteImages;

  if (deleteImages) {
    deleteImages = deleteImages.split(",");
  }

  readPositionsFromFile((err, positions) => {
    if (err) {
      return next(err);
    }
    const index = positions.findIndex((pos) => pos.id === id);
    if (index === -1) {
      return res.status(404).json({ error: "Position not found" });
    }

    // Remove deleted images and associated files
    if (deleteImages && deleteImages.length > 0) {
      positions[index].images = positions[index].images.filter(
        (img) => !deleteImages.includes(img)
      );
      // Remove deleted image files from disk
      deleteImages.forEach((imageName) => {
        const imagePath = path.join(uploadPath, imageName);
        if (fs.existsSync(imagePath)) {
          fs.unlinkSync(imagePath);
        }
      });
    }

    // Add new images to the existing images array
    if (files && files.length > 0) {
      const newImages = files.map((file) => file.filename);
      positions[index].images = [...positions[index].images, ...newImages];
    }

    // Update other fields in the position
    positions[index] = {
      ...positions[index],
      ...body,
      images: positions[index].images, // Ensure images array is updated correctly
    };

    writePositionsToFile(positions, (err) => {
      if (err) {
        return next(err);
      }
      res.json(positions[index]);
    });
  });
});

// DELETE a position by ID (mark as deleted)
router.delete("/:id", (req, res, next) => {
  const { id } = req.params;

  readPositionsFromFile((err, positions) => {
    if (err) {
      return next(err);
    }
    const index = positions.findIndex((pos) => pos.id === id);
    if (index === -1) {
      return res.status(404).json({ error: "Position not found" });
    }

    // Mark the position as deleted
    positions[index].isDeleted = "true";

    writePositionsToFile(positions, (err) => {
      if (err) {
        return next(err);
      }
      res.json(positions[index]);
    });
  });
});

// Use error handler middleware
router.use(errorHandler);

module.exports = router;
