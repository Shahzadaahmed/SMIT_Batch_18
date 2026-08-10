// DB Configuration...!

import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const res = await mongoose.connect(
            process.env.DB_URL,
            { dbName: "B18_DB" }
        );
        res && console.log('Mongo DB connected successfully!');
    }

    catch (error) {
        console.log('Something went wrong while connecting DB:', error);
    };
};

export default connectDB;