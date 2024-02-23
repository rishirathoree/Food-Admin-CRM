import { Router } from "express";
import { GetAllFoods } from "../Controller/Foods.js";

const router = Router()

router
.get("/",GetAllFoods)

export default router;