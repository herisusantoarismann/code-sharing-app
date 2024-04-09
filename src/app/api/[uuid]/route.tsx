import prisma from "@/services/prisma-client";
import { NextApiRequest } from "next";

export function GET(
  req: NextApiRequest,
  { params }: { params: { id: string } }
) {
  return Response.json({ message: params });
}
