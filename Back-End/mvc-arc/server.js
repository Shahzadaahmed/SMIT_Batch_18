import { config } from "dotenv";

import express from "express";
import morgan from "morgan";
import cors from "cors";
import * as dns from "dns"; // For resolving hostnames...!
import connectDB from "./src/db/db.js";

import userRoutes from "./src/routes/user-routes/user-routes.js";

config({ path: "./.env" });

dns.setDefaultResultOrder("ipv4first"); // For resolving hostnames to IPv4 addresses first...!
dns.setServers(["1.1.1.1", "8.8.8.8"]); // For setting custom DNS servers...!

const port = 5050;
const server = express();

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());
server.use(userRoutes);

server.listen(process.env.PORT, () => {
    console.log('Your Node JS server is running!');
    connectDB();
});