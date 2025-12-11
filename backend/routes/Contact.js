import pool from "../db.js";
import express from "express";


const router = express.Router();

router.post("/", async (req, res) => {
  const { nama, email, subjek, pesan } = req.body;

  if (!nama || !email || !subjek || !pesan) {
    return res.status(400).json({ error: "Semua field wajib diisi!" });
  }

 
  if (!email.includes("@gmail.com")) {
    return res.status(400).json({ error: "Email harus menggunakan @gmail.com" });
  }

  try {
    const result = await pool.query(
      `INSERT INTO contact (nama, email, subjek, pesan)
       VALUES ($1, $2, $3, $4)
       RETURNING *;`,
      [nama, email, subjek, pesan]
    );

    res.status(201).json({
      message: "Pesan berhasil dikirim!",
      data: result.rows[0],
    });
  } catch (err) {
    console.error("Error inserting contact:", err);
    res.status(500).json({ error: "Gagal menyimpan pesan ke database" });
  }
});

export default router;
