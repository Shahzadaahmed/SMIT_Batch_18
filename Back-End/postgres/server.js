import express from "express";
import morgan from "morgan";
import cors from "cors";
import pool from "./src/db/db.js";

const port = 5050;
const server = express();

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());

server.listen(port, () => {
    console.log('Your Node JS server is running!');
});