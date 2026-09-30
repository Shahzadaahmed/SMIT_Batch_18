// User controller functions...!

import UserModal from "../../models/user-model/user-model.js";

const getAllUsers = async (req, res) => {
    try {
        const users = await UserModal.find().select('-password');
        res.status(200).send({
            status :true,
            message :"Users Data",
            data :users
        });
    }
    
    catch (error) {
        console.log('Something went wrong whilr fethcing users:', error);
    };
};

export { getAllUsers };