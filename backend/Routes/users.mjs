import express from "express";
import { register, login, editUser } from "../Controllers/users.mjs";

const router = express.Router()

// Get
router.get("/login", login)

// Post
router.post("/create", register)

// Patch
router.patch("/edit", editUser)

// Delete

export default router
