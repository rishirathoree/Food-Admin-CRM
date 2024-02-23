import {Router} from 'express'
import { CreateMenus, GetMenus } from '../Controller/Menus.js'
import { TokenChecker } from '../Controller/Authentication.js';
import uploads from '../Middlewares/Multer-config.js';

const router = Router()

router.post('/create',TokenChecker,uploads.single('images'),CreateMenus).get('/',TokenChecker,GetMenus)

export default router;