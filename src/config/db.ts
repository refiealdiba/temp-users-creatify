import mysql from "mysql2/promise";

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "users-creatify",
});

export async function testDbConnection() {
    try {
        const connection = await db.getConnection();
        console.log("Database connection successful!");
        connection.release();
    } catch (error) {
        console.error("Database connection failed:", error);
    }
}

export default db;
// This code creates a MySQL connection pool using the mysql2 library.
