import express from "express";
import { createUser } from "../Controllers/users.mjs";

const router = express.Router()

// Get

// Post
router.get("/create", createUser)

// Patch

// Delete

export default router