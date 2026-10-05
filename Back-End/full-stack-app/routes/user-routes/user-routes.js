// User api routes...!

import express from "express";
import { getAllUsers } from "../../controller/user-controller/user-controller.js";

const router = express.Router();

// Fetch all users api...!
router.route("/fetch/all").get(getAllUsers);

export default router;