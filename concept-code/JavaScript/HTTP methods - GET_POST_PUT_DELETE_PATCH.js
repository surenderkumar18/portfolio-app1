// ----- PUT -----------------------------

const updateUser = (userId, userData) => {
  axios
    .put(`http://localhost:3000/api/users/${userId}`, userData)
    .then((response) => {
      console.log("User updated successfully:", response.data);
      // Handle success, e.g., update state or show a success message
    })
    .catch((error) => {
      console.error("Error updating user:", error);
      // Handle error, e.g., show an error message
    });
};

// ----- PATCH -----------------------------

const updateUserEmail = (userId, newEmail) => {
  axios
    .patch(`http://localhost:3000/api/users/${userId}`, { email: newEmail })
    .then((response) => {
      console.log("User email updated successfully:", response.data);
      // Handle success, e.g., update state or show a success message
    })
    .catch((error) => {
      console.error("Error updating user email:", error);
      // Handle error, e.g., show an error message
    });
};

// ----- Node Express server ----------------

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

let users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
];

// GET /api/users
app.get("/api/users", (req, res) => {
  res.json(users);
});

// POST /api/users
app.post("/api/users", (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT /api/users/:id
app.put("/api/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const updatedUser = req.body;
  users = users.map((user) => (user.id === userId ? updatedUser : user));
  res.json(updatedUser);
});

// PATCH /api/users/:id
app.patch("/api/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const updatedFields = req.body;
  users = users.map((user) =>
    user.id === userId ? { ...user, ...updatedFields } : user
  );
  const updatedUser = users.find((user) => user.id === userId);
  res.json(updatedUser);
});

// DELETE /api/users/:id
app.delete("/api/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  users = users.filter((user) => user.id !== userId);
  res.json({ message: `User with ID ${userId} has been deleted successfully` });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
