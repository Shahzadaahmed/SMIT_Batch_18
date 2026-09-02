// All user related routes are defined here...!

import express from "express";
import { greetUser, createUser, fetchUsers, handleDeleteUser, handleUpdateUser, handleLogIn, fetchUserByID , addBulkData , handleSendEmail } from "../../controllers/user-controller/user-controller.js";
import { checkAuthenticated } from "../../middleware/custom-middleware.js";

const router = express.Router();

router.route('/').get(greetUser);

router.route('/user/save').post(createUser);

router.route('/users/fetch').get(fetchUsers);

router.route('/user/fetch').get(fetchUserByID);

router.route('/user/delete/:uid').delete(handleDeleteUser);

router.route('/user/update').put(handleUpdateUser);

router.route('/login').post(handleLogIn);

router.route('/bulk/users/add').post(addBulkData);

router.route('/send/mail').post(handleSendEmail);

export default router;