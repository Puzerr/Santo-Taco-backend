import express from "express";
import { criarComanda, listarComandas } from "../controllers/ComandaController.js";

const router = express.Router()

router.post("/", criarComanda)
router.get('/', listarComandas)


export default router;