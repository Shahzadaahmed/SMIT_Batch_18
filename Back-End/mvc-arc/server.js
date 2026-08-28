import { config } from "dotenv";

import express from "express";
import morgan from "morgan";
import cors from "cors";
import * as dns from "dns"; // For resolving hostnames...!
import connectDB from "./src/db/db.js";
import compression from "compression";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

import userRoutes from "./src/routes/user-routes/user-routes.js";

config({ path: "./.env" });

dns.setDefaultResultOrder("ipv4first"); // For resolving hostnames to IPv4 addresses first...!
dns.setServers(["1.1.1.1", "8.8.8.8"]); // For setting custom DNS servers...!

const port = process.env.PORT;
const server = express();
const limit = rateLimit({
    windowMs: 1000 * 60 * 15,
    max: 50,
    standardHeaders: true
});

server.use(compression());
server.use(helmet());
server.use(cors());
server.use(morgan('dev'));
server.use(express.json());
server.use(limit);
server.use(userRoutes);

server.listen(port, () => {
    console.log('Your Node JS server is running!');
    connectDB();
});