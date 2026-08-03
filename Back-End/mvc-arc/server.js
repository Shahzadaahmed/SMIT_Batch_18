import express from "express";
import morgan from "morgan";
import cors from "cors";
import connectDB from "./src/db/db.js";

import userRoutes from "./src/routes/user-routes/user-routes.js";

const port = 5050;
const server = express();

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());
server.use(userRoutes);

server.listen(port, () => {
    console.log('Your Node JS server is running!');
    connectDB();
});