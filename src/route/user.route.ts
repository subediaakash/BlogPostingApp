import { Router } from "express";
import { Signup } from "../controller/signup";
import { SignIn } from "../controller/signin";
import authMiddleware from "../middleware/auth.middleware";
import { getPost } from "../controller/getPost";
import { createPost } from "../controller/createPost";
import { deletePost } from "../controller/deletePost";
export const userRouter = Router();

userRouter.post("/signup", Signup);
userRouter.post("/signin", SignIn);
userRouter.get("/posts", authMiddleware, getPost);
userRouter.post("/new", authMiddleware, createPost);
userRouter.delete("/posts/:postId", authMiddleware, deletePost);
