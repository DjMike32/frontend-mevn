import mysql2 from "mysql2";

const db = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "admin1234",
  database: "mysql_users",
});
export { db };