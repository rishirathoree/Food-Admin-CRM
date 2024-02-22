import { Router } from "express";

import { Login, Signup } from "../Controller/Authentication.js";

import uploads from "../Middlewares/Multer-config.js";

const router = Router()

router.post('/signup',uploads.none(),Signup).post('/login',Login)

export default router;