import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import jwt, { Secret } from "jsonwebtoken";
import bcrypt from "bcrypt";
import "dotenv/config";

const prisma = new PrismaClient();

export const Signup = async (req: Request, res: Response) => {
  const { email, password, name } = req.body;
  try {
    if (!email || !name || !password) {
      return res
        .status(400)
        .json({ message: "Email, name, and password are required" });
    }
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return res.status(400).json({ msg: "The user already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const data = {
      email,
      password: hashedPassword,
      name,
    };

    const newUser = await prisma.user.create({
      data: data,
    });

    const token = jwt.sign(
      { email: email, id: newUser.id },
      process.env.JWT_SECRET as Secret
    );

    return res
      .status(200)
      .json({ message: "usercreated successfully", token: token });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
