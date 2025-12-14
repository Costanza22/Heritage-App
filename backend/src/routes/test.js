import { Router } from "express";
import pool from "../db/db.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ postgres_time: result.rows[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro no PostgreSQL" });
  }
});

export default router;
