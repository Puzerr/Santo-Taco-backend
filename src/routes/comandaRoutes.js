import express from "express";
import { criarComanda } from "../controllers/ComandaController.js";

const router = express.Router()

router.post("/", criarComanda)

export default router;