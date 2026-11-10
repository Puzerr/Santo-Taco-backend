import express from "express";
import { criarComanda } from "../controllers/ComandaController.ks";

const router = express.Router()

router.post("/", criarComanda)

export default router;