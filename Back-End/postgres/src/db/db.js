import pg from "pg";

const { Pool } = pg;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    port: 5432,
    database : "postgres",
    password : "admin123"
});

pool
    .connect()
    .then((res) => {
        console.log('Postgres DB connected successfully!');
        res.release();
    })
    .catch((err) => {
        console.log('Err while connection with postgres');
    });

export default pool;