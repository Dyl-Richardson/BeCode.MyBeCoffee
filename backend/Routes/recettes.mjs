import express from "express";
import { create, allByDate, modify, deleteRecette  } from "../Controllers/recettes.mjs";

const router = express.Router()

// Get
router.get("/allByDate", allByDate)
// Post
router.post("/create", create)

// Patch
router.patch("/modify", modify)
// Delete
router.delete("/deleteRecette", deleteRecette)
export default router

