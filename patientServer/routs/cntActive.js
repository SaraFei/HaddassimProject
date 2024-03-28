import express from "express";
import { getCntActivePatients } from "../controllers/functions.js";

const router = express.Router();

router.get("/", getCntActivePatients);

export default router;