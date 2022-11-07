import express from "express";
import { fileSave } from "../controllers/user.js";

const router = express.Router();

router.post("/upload", fileSave);

export default router;
