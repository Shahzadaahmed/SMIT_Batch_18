// All user related routes are defined here...!

import express from "express";
import { greetUser, createUser , fetchUsers , handleDeleteUser } from "../../controllers/user-controller/user-controller.js";

const router = express.Router();

router.route('/').get(greetUser);

router.route('/user/save').post(createUser);

router.route('/users/fetch').get(fetchUsers);

router.route('/user/delete/:uid').delete(handleDeleteUser);

export default router;