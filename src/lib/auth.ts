// src/lib/auth.ts
import jwt from "jsonwebtoken";
import type { StringValue } from "ms";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import prisma from "./db";

const JWT_SECRET = process.env.JWT_SECRET!;

export const generateToken = (userId: string) => {
  const expiresIn = (process.env.JWT_EXPIRES_IN as StringValue) || "7d";

  return jwt.sign({ userId }, JWT_SECRET, { expiresIn });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, JWT_SECRET) as { userId: string };
};

export const getCurrentUser = async () => {
  const cookieStore = await cookies(); 
  const token = cookieStore.get("token")?.value;
  if (!token) return null;

  try {
    const { userId } = verifyToken(token);
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        phone: true,
        address: true,
        city: true,
        postalCode: true,
        country: true,
      },
    });
    return user;
  } catch (error) {
    return (
        console.error("Token verification failed:", error),
        null
    );
  }
};

export const requireAuth = async () => {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  return user;
};
