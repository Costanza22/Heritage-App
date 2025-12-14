import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import testRoute from "./routes/test.js";
import placesRoute from "./routes/places.js";

dotenv.config();

const app = express();

app.use(cors());              // ⭐ ESSENCIAL
app.use(express.json());

app.use("/test", testRoute);
app.use("/places", placesRoute);

app.get("/", (req, res) => {
  res.send("API funcionando 🚀");
});

const PORT = process.env.PORT || 4000; // ⭐ 

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
