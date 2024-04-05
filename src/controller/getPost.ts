import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getPost = async (req: Request, res: Response) => {
  const userID = res.locals.user.id;
  const posts = await prisma.post.findMany({
    where: {
      userId: userID,
    },
  });
  return res.json({
    posts: posts,
  });
};
