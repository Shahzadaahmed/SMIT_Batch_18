import express from "express";
import morgan from "morgan";
import cors from "cors";

// let users = ['Ahmed', 'Ali', 'Aziz', 'Samad', 'Faraz'];
let users = [];

const port = 5050;
const server = express();

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());

// First Api...!
server.get("/", (req, res) => {
    return res.status(200).send({
        message: "Your 1st api in Node JS!"
    });
});

// Api to fetch all users...!
server.get("/api/users", (req, res) => {
    if (users.length == 0) {
        return res.status(400).send({
            status: false,
            message: "No users data available"
        });
    };

    return res.status(200).send({
        status: true,
        data: users
    });
});

// APi to add user data...!
server.post("/api/user/add", (req, res) => {
    const { user } = req.body;
    console.log('Body:', user);

    if (user == undefined || user == "") {
        return res.status(400).send({
            status: false,
            message: "User name is required"
        });
    };

    const usersClone = [...users];
    usersClone.push(user);
    users = usersClone;

    return res.status(200).send({
        status: true,
        message: "Data added successfully!"
    });
});

server.listen(port, () => {
    console.log('Your Node JS server is running!');
});