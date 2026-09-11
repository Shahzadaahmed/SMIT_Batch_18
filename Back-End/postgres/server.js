import express from "express";
import morgan from "morgan";
import cors from "cors";
import dbConfig from "./src/db/db.js";

const port = 5050;
const server = express();

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());

// Note: Add data api...!
server.post("/user/add", async (req, res) => {
    const { username, email, age } = req.body;
    console.log('Body:', username, email, age);

    try {
        const apiRes = await dbConfig.query(
            "INSERT INTO users(username, email, age) VALUES($1, $2, $3) RETURNING *",
            [username, email, age]
        );
        console.log("Res:", apiRes);

        if (apiRes?.rows) {
            return res.status(200).send({
                status: true,
                message: "User added!",
                data: apiRes?.rows[0]
            });
        };
    }

    catch (error) {
        console.log('Err while adding data:', error);
        return res.status(500).send({
            status: false,
            message: "Internal server error!"
        });
    }
});

// Note: Fetch all users data api...!
server.get("/user/fetch/all", async (req, res) => {

    try {
        const apiRes = await dbConfig.query("SELECT * FROM users");
        console.log("Res:", apiRes?.rows);

        if (apiRes?.rows) {
            return res.status(200).send({
                status: true,
                message: "Users",
                data: apiRes?.rows
            });
        };
    }

    catch (error) {
        console.log('Err while fetching users data:', error);
        return res.status(500).send({
            status: false,
            message: "Internal server error!"
        });
    }
});

server.listen(port, () => {
    console.log('Your Node JS server is running!');
});