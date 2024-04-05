import { Router } from "express";
import { Signup } from "../controller/signup";
import { SignIn } from "../controller/signin";
export const userRouter = Router();

userRouter.post("/signup", Signup);
userRouter.post("/signin", SignIn);
