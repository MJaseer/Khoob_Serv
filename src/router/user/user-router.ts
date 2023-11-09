import { Router } from "express";
import { User } from "../../controllers/user/user";
import { validationMiddleware } from "../../middlewares/validation/yup";

const user = new User();

const validator = new validationMiddleware()

const router = Router()

router.post('/register',validator.registerValidationMiddleware,user.userRegister)

router.post('/login',validator.loginValidationMiddleware,user.userLogin)

export default router