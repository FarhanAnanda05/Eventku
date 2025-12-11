import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.DB_URL,
  ssl: { rejectUnauthorized: false }  
});


pool.connect()
  .then(() => {
    console.log("Connected to NEON PostgreSQL using Pool");
  })
  .catch(err => {
    console.error("Pool connection error:", err);
  });

export default pool;
