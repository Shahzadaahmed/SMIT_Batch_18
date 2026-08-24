// All user related routes are defined here...!

import express from "express";
import { greetUser, createUser, fetchUsers, handleDeleteUser, handleUpdateUser, handleLogIn } from "../../controllers/user-controller/user-controller.js";
import { checkAuthenticated } from "../../middleware/custom-middleware.js";

const router = express.Router();

router.route('/').get(greetUser);

router.route('/user/save').post(createUser);

router.route('/users/fetch').get(checkAuthenticated, fetchUsers);

router.route('/user/delete/:uid').delete(handleDeleteUser);

router.route('/user/update').put(handleUpdateUser);

router.route('/login').post(handleLogIn);

export default router;