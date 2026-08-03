// All user related routes are defined here...!

import express from "express";
import { greetUser } from "../../controllers/user-controller/user-controller.js";

const router = express.Router();

router.route('/').get(greetUser);

export default router;