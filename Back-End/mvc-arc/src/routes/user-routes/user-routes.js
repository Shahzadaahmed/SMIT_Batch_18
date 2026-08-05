// All user related routes are defined here...!

import express from "express";
import { greetUser, createUser } from "../../controllers/user-controller/user-controller.js";

const router = express.Router();

router.route('/').get(greetUser);

router.route('/user/save').post(createUser);

export default router;