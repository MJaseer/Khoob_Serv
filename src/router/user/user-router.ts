import { Router } from "express";
import { User } from "../../controllers/user/user";

const user = new User();


const router = Router()

router.post('/register',user.userRegister)

router.post('/login',user.userLogin)

export default router