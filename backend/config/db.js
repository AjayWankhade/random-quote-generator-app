import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost", // Replace with your database host
  user: "root", // Replace with your database user
  password: "1681997", // Replace with your database password
  database: "mysql", // Replace with your database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
