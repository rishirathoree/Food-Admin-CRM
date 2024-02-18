import { Router } from "express";
import { Signup } from "../Controller/Authentication.js";
const router = Router()

router.post('/signup',Signup)

export default router;