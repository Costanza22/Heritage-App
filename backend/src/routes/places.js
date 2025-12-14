import { Router } from "express";
import pool from "../db/db.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        p.id,
        p.name,
        p.description,
        p.image_url,
        c.name AS category,
        ci.name AS city,
        ST_X(p.location::geometry) AS lon,
        ST_Y(p.location::geometry) AS lat
      FROM places p
      JOIN categories c ON p.category_id = c.id
      JOIN cities ci ON p.city_id = ci.id
    `);

    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao buscar locais" });
  }
});

export default router;
