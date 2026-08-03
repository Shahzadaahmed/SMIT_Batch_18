// All user related controller functions are defined here...!

const greetUser = (req, res) => {
    return res.status(200).send({
        message: "User module in Node JS"
    });
};

export { greetUser };