// User modal structure...!

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        userName: String,
        email: {
            type: String,
            // unique: true
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            required: true,
            enum: ['trainer', 'student']
        }
    },
    {
        collection: "users",
        timestamps : true
    }
);

const UserModal = mongoose.model("users", userSchema);
export default UserModal;