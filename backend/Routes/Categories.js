import { Router } from "express";

import { CreateCategories, DeleteCategories, GetRestaurantCategories } from "../Controller/Categories.js";

import { TokenChecker } from "../Controller/Authentication.js";
import uploads from "../Middlewares/Multer-config.js";

const router = Router()

router
.post('/create',uploads.none(),TokenChecker,CreateCategories)
.get('/',TokenChecker,GetRestaurantCategories)
.delete('/:id',TokenChecker,DeleteCategories)

export default router;