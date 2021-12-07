import express from "express";
import { createUser } from "../Controllers/users.mjs";

const router = express.Router()

// Get

// Post
router.post("/create", createUser)

// Patch

// Delete

export default router