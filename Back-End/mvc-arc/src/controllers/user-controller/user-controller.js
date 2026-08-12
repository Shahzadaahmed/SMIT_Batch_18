// All user related controller functions are defined here...!

import UserModal from "../../modals/user-modal/user-modal.js";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const greetUser = (req, res) => {
    return res.status(200).send({
        message: "User module in Node JS"
    });
};

// Save / create usaer controller...!
const createUser = async (req, res) => {
    try {
        const isUserExist = await UserModal.findOne({ email: req.body.email });
        if (isUserExist) {
            return res.status(400).send({
                status: false,
                message: "Email already exist!"
            });
        };

        // Note: Hashing password...!
        const securePass = await bcrypt.hash(req?.body?.password, 10);

        let userData = { ...req?.body, password: securePass };
        console.log('User: ', userData);

        const newUser = new UserModal(userData);
        const saveUser = await newUser.save();

        if (saveUser) {
            return res.status(200).send({
                status: true,
                message: "User saved successfully"
            });
        };
    }

    catch (error) {
        console.log(`Err while saving user: ${error}`);
        return res.status(500).send({
            status: false,
            message: "Internal server error!"
        });
    };
};

// fetch users controller...!
const fetchUsers = async (req, res) => {
    try {
        const { role } = req.query;
        console.log('Query:', role);

        const counts = await UserModal.countDocuments();
        console.log('Counts:', counts);
        if (counts == 0) {
            return res.status(400).send({
                status: false,
                message: "No User found",
                data: []
            });
        }

        const query = (role) ? ({ role }) : ({});
        // const fetchData = await UserModal.find(query).select('userName email');
        const fetchData = await UserModal.find(query).select('-password');
        return res.status(200).send({
            status: true,
            message: "Users",
            data: fetchData
        });
    }

    catch (error) {
        console.log(`Err while fetching user: ${error}`);
        return res.status(500).send({
            status: false,
            message: "Err while fetching user!"
        });
    };
};

// Delete user controller...!
const handleDeleteUser = async (req, res) => {
    try {
        const { uid } = req.params;
        console.log('Uid:', uid);

        const checkUid = mongoose.isValidObjectId(uid);

        if (!checkUid) {
            return res.status(400).send({
                status: false,
                message: "Invalid Uid"
            });
        }

        // const delUser = await UserModal.findByIdAndDelete(uid);

        const delUser = await UserModal.deleteOne({ _id: uid });

        if (delUser) {
            return res.status(200).send({
                status: true,
                message: "User deleted!"
            });
        };
    }

    catch (error) {
        console.log(`Err while deletingt user: ${error}`);
        return res.status(500).send({
            status: false,
            message: "Err while deletingt user!"
        });
    }
};

// Update user controller...! { _id : uid },
const handleUpdateUser = async (req, res) => {
    const { uid, updatedName, updatedPass } = req.body;

    try {
        const update = await UserModal.findByIdAndUpdate(
            uid,
            {
                userName: updatedName,
                password: updatedPass
            },
            { new: true }
        );
        console.log('Username:', update?.userName);

        if (update) {
            return res.status(200).send({
                status: true,
                message: "User updated successfully!"
            });
        }
    }

    catch (error) {
        console.log(`Err while updating user: ${error}`);
        return res.status(500).send({
            status: false,
            message: "Err while updating user!"
        });
    };
};

// Log in controller...!
const handleLogIn = async (req, res) => {
    try {
        const { email, password } = req?.body;

        if (!email || !password) {
            return res.status(400).send({
                status: false,
                message: "Validation Err"
            });
        };

        const isUserExist = await UserModal.findOne({ email: email });
        if (!isUserExist) {
            return res.status(401).send({
                status: false,
                message: "User does not exist"
            });
        };

        const checkPassword = await bcrypt.compare(password, isUserExist.password);
        if (!checkPassword) {
            return res.status(404).send({
                status: false,
                message: "Password did not match"
            });
        };

        // 200
        return res.status(200).send({
            status: true,
            message: "You have logged in successfully",
            data: isUserExist
        });
    }

    catch (error) {
        console.log(`Err while login user: ${error}`);
        return res.status(500).send({
            status: false,
            message: "Err while login user!"
        });
    };
}

export { greetUser, createUser, fetchUsers, handleDeleteUser, handleUpdateUser, handleLogIn };