import express from "express";
import { createCompetition, editCompetition, fetchCompetitionById, fetchCompetitions, fetchCompetitionsByDateRange, fetchCompetitionsByStatus, finishCompetition, removeCompetition } from "../controllers/competition.controller";

const router = express.Router();


router.post("/",createCompetition);
router.get("/",fetchCompetitions);
router.get("/:id",fetchCompetitionById);
router.put("/:id",editCompetition);
router.delete("/:id",removeCompetition);
router.get("/status",fetchCompetitionsByStatus);
router.get("/data-range",fetchCompetitionsByDateRange);
router.post("/:id/finish",finishCompetition);

