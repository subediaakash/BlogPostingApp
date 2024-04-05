import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createPost = async (req: Request, res: Response) => {
  try {
    const { title, description } = req.body;
    const userID = res.locals.user.id;

    const newPost = await prisma.post.create({
      data: {
        title,
        description,
        User: {
          connect: { id: userID },
        },
      },
    });

    res.status(201).json(newPost);
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ error: "Could not create post" });
  }
};
