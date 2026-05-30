import express from "express";
import { createArt, editArt, fecthArts, fetchArtById,removeArt } from "../controllers/art.controller";

const router=express.Router()

router.post("/",createArt);
router.get("/",fecthArts);
router.get("/:id",fetchArtById);
router.put("/:id",editArt);
router.delete("/:id",removeArt);
