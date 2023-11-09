import { Router } from "express";
import { User } from "../../controllers/user/user";
import { validation } from "../../middlewares/validation/yup";

const user = new User();

const validator = new validation()

const router = Router()

router.post('/register',validator.registerValidation,user.userRegister)

router.post('/login',validator.loginValidation,user.userLogin)

export default router