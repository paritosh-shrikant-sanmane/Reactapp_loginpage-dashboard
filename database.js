const { createPool } = require('mysql');

const pool = createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "react_web_app",
  connectionLimit: 2
});
pool.query(`SELECT * FROM signup_page`,(err, results, fields) => {
  if (err) {
    console.error("Error executing query:", err);
  } else {
    console.log("Query results:", results);
    for (const row of results) {
      console.log("Row:", row);
    }
  }
  pool.end((err) => {
    if (err) {
      console.error("Error closing pool:", err);
    } else {
      console.log("Pool closed.");
    }
  });
});
