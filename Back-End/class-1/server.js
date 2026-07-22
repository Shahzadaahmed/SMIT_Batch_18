import express from "express";
import morgan from "morgan";

const users = ['Ahmed', 'Ali', 'Aziz'];

const port = 5050;
const server = express();

server.use(morgan('dev'));
server.use(express.json());

// First Api...!
server.get("/", (req, res) => {
    return res.status(200).send({
        message: "Your 1st api in Node JS!"
    });
});

server.listen(port, () => {
    console.log('Your Node JS server is rumming!');
});