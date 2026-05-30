import express from "express";
import {createUser,
    fecthUsers,
    fecthUserById,
    editUser,
    removeUser } from "../controllers/user.controller";

const router = express.Router();

router.post("/", createUser);
router.get("/", fecthUsers);
router.get("/:id", fecthUserById);
router.put("/:id", editUser);
router.delete("/:id", removeUser);

export default router;