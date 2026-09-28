// Mondo DB conection configuration file...!

import mongoose from "mongoose";

const handleConnectDB = async () => {
    try {
        const isConnect = await mongoose.connect(
            process.env.DB_URL,
            { dbName : "B18_DB" }
        );
        isConnect && console.log(`Mongo DB coonected successfully! - ${isConnect.connection.host}`);
    }
    
    catch (error) {
        console.log('Err while connecting DB:' , error);
    };
};

export default handleConnectDB;