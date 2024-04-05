import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const deletePost = async (req: Request, res: Response) => {
  const userId = res.locals.user.id;
  const postId = parseInt(req.params.postId);

  try {
    const post = await prisma.post.delete({
      where: {
        id: postId,
        userId,
      },
    });

    return res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    console.error("Error deleting post:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
