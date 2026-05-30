import express from "express";
import { createArt, fetchVoteCount, fetchVotes } from "../controllers/vote.controller";



const router=express.Router()

router.post("/",createArt);
router.get("/",fetchVotes);
router.get("/:id",fetchVoteCount);