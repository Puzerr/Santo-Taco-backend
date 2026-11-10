import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/config/db.js";

import pratoRoutes from "./src/routes/pratoRoutes.js"
import comandaRoutes from "./src/routes/comandaRoutes.js"

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/pratos", pratoRoutes)
app.use("/api/comandas", comandaRoutes)


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
