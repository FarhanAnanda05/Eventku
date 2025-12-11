export const addEvent = async (req, res) => {
  const { judul, banner, tanggal, lokasi, harga, deskripsi, syarat, kategori } = req.body;

  if (!judul) return res.status(400).json({ error: "Judul wajib diisi" });

  try {
    const result = await pool.query(
      `INSERT INTO events (judul, banner, tanggal, lokasi, harga, deskripsi, syarat, kategori)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
       RETURNING *`,
      [judul, banner, tanggal, lokasi, harga, deskripsi, syarat, kategori]
    );

    res.status(201).json({
      message: "Event berhasil ditambahkan!",
      data: result.rows[0],
    });
  } catch (err) {
    console.error("Error menambah event:", err);
    if (err.code === "23505") {
      res.status(400).json({ error: "Judul event sudah terdaftar!" });
    } else {
      res.status(500).json({ error: "Gagal menambahkan event" });
    }
  }
};


export const deleteEvent = async (req, res) => {
  const { judul } = req.params;

  try {
    const result = await pool.query("DELETE FROM events WHERE judul = $1 RETURNING *", [judul]);

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Event tidak ditemukan" });
    }

    res.status(200).json({
      message: "Event berhasil dihapus!",
      deleted: result.rows[0],
    });
  } catch (err) {
    console.error("Error menghapus event:", err);
    res.status(500).json({ error: "Gagal menghapus event" });
  }
};

export const getAllEvents = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM events ORDER BY id DESC");
    res.status(200).json(result.rows);
  } catch (err) {
    console.error("Error mengambil event:", err);
    res.status(500).json({ error: "Gagal mengambil data event" });
  }
};


export const searchEvent = async (req, res) => {
  const { q } = req.query; 

  try {
   
    if (!q) {
      const all = await pool.query("SELECT * FROM events ORDER BY judul ASC");
      return res.status(200).json(all.rows);
    }

   
    const result = await pool.query(
      "SELECT * FROM events WHERE LOWER(judul) LIKE LOWER($1) ORDER BY judul ASC",
      [`%${q}%`]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Event tidak ditemukan." });
    }

    res.status(200).json(result.rows);
  } catch (err) {
    console.error("Error mencari event:", err);
    res.status(500).json({ error: "Gagal mencari event" });
  }
};

import pool from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"; 

const JWT_SECRET = process.env.JWT_SECRET || "123456";

export const registerUser = async (req, res) => {
  const { nama, email, password, confirmPassword } = req.body;


  if (!nama || !email || !password || !confirmPassword) {
    return res.status(400).json({ error: "Semua field wajib diisi!" });
  }

 
  if (password !== confirmPassword) {
    return res.status(400).json({ error: "Password dan konfirmasi tidak cocok!" });
  }


  if (!email.includes("@gmail.com")) {
    return res.status(400).json({ error: "Email harus menggunakan @gmail.com" });
  }

  try {
  
    const existingUser = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    if (existingUser.rows.length > 0) {
      return res.status(400).json({ error: "Email sudah terdaftar!" });
    }


    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await pool.query(
      "INSERT INTO users (nama, email, password) VALUES ($1, $2, $3) RETURNING id, nama, email",
      [nama, email, hashedPassword]
    );

    res.status(201).json({
      message: "Registrasi berhasil!",
      user: newUser.rows[0],
    });
  } catch (err) {
    console.error("Error registering user:", err);
    res.status(500).json({ error: "Terjadi kesalahan pada server" });
  }
};


export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email dan password wajib diisi!" });
  }

  try {
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    if (result.rows.length === 0) {
      return res.status(400).json({ error: "Email tidak ditemukan!" });
    }

    const user = result.rows[0];
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(401).json({ error: "Password salah!" });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      message: "Login berhasil!",
      token,
      user: { id: user.id, nama: user.nama, email: user.email },
    });
  } catch (err) {
    console.error("Error logging in:", err);
    res.status(500).json({ error: "Terjadi kesalahan server" });
  }
};

export const getEventById = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query("SELECT * FROM events WHERE id = $1", [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Event tidak ditemukan" });
    }

    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error("Error mengambil event:", err);
    res.status(500).json({ error: "Gagal mengambil data event" });
  }
};