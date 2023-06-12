const express = require("express");
const {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");
const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/authenticate");
const router = express.Router();

// Create a new blog
router.post("/blogs", isAuthenticatedUser, createBlog);

// Get all blogs
router.get("/blogs", getAllBlogs);

// Get a single blog by ID
router.get("/blogs/:id", getBlogById);

// Update a blog by ID
router.put("/blogs/:id", isAuthenticatedUser, updateBlog);

// Delete a blog by ID
router.delete("/blogs/:id", isAuthenticatedUser, deleteBlog);

module.exports = router;