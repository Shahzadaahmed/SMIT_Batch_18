import pg from "pg";

const { Pool } = pg;

const dbConfig = new Pool({
    user: "postgres",
    host: "localhost",
    port: 5432,
    database : "postgres",
    password : "admin123"
});

dbConfig
    .connect()
    .then((res) => {
        console.log('Postgres DB connected successfully!');
        res.release();
    })
    .catch((err) => {
        console.log('Err while connection with postgres');
    });

export default dbConfig;