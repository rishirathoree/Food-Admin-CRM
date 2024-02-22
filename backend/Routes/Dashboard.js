import { Router } from "express";
import { GetDashboard } from "../Controller/Dashboard.js";
import { TokenChecker } from "../Controller/Authentication.js";

const router = Router()

router.get('/dashboard',TokenChecker,GetDashboard)

export default router;