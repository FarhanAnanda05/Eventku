import pool from './db.js';

const initDB = async () => {
  try {
    // tabel contact 
    await pool.query(`
      CREATE TABLE IF NOT EXISTS contact (
        id SERIAL PRIMARY KEY,
        nama VARCHAR(100) NOT NULL,
        email VARCHAR(150) NOT NULL,
        subjek VARCHAR(255) NOT NULL,
        pesan TEXT NOT NULL
      );
    `);

    

    //tabel user 
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        nama VARCHAR(100) NOT NULL,
        email VARCHAR(150) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
      );
    `);


    //tabel events
    await pool.query(`
      CREATE TABLE IF NOT EXISTS events (
        id SERIAL PRIMARY KEY,
        judul VARCHAR(255) NOT NULL UNIQUE,
        banner VARCHAR(255),
        tanggal VARCHAR(100),
        lokasi VARCHAR(255),
        harga VARCHAR(100),
        deskripsi TEXT,
        syarat TEXT,
        kategori VARCHAR(100)
      );
    `);

  

    process.exit();
  } catch (err) {
    console.error("Error creating tables:", err);
    process.exit(1);
  }
};

initDB();
