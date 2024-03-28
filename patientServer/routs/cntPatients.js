import express from "express";
import {  getCountPatients } from "../controllers/functions.js";

const router = express.Router();

router.get("/", getCountPatients);

export default router;