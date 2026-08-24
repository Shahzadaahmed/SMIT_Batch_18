import jwt from "jsonwebtoken";

const checkAuthenticated = (req, res, next) => {
    try {
        const headerVal = req.headers?.authorization;
        console.log('Headers:', headerVal);

        if (!headerVal || headerVal == undefined) {
            return res.status(400).send({
                status: false,
                message: "Token is required!"
            });
        };

        console.log('JWT validation:', process.env.JWT_Secret);

        const verifyToken = jwt.verify(headerVal, process.env.JWT_Secret);

        if (verifyToken) {
            next();
        }

        else {
            return res.status(401).send({
                status: false,
                message: "Invalid Token or Token is expired!"
            });
        };

    }

    catch (error) {
        console.log('Token Err:', error);

        return res.status(500).send({
            status: false,
            message: "Token err from server side!"
        });
    };
};

export { checkAuthenticated };