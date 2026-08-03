import express from "express";
import morgan from "morgan";
import cors from "cors";

let users = [];
// {
//     id : 1,
//     name : "",
//     email : "",
//     pass : ""
// }

// [2 , 8 , 4 , 1]
// [32 , 8 , 16 , 64]

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
            message: "No users data available",
            data: []
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

// APi to delete user data...!
server.delete("/api/user/delete/:key", (req, res) => {
    const { key } = req.params;
    console.log('Key:', key);

    const usersClone = [...users];
    usersClone.splice(key, 1);
    users = usersClone;

    return res.status(200).send({
        status: true,
        message: "User deleted successfully!"
    });
});

// APi to update user data...!
server.put("/api/user/update", (req, res) => {
    const { key, newVal } = req.body;

    const usersClone = [...users];
    usersClone.splice(key, 1, newVal);
    users = usersClone;

    return res.status(200).send({
        status: true,
        message: "Data updated successfully!"
    });
});

server.listen(port, () => {
    console.log('Your Node JS server is running!');
});
// "leet**cod*d*e"
// "lecoe"