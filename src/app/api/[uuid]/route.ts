import prisma from "@/services/prisma-client";
import { NextApiRequest } from "next";

export async function GET(
  req: NextApiRequest,
  { params }: { params: { uuid: string } }
) {
  const data = await prisma.code.findFirst({
    where: {
      uuid: params.uuid,
    },
  });

  return Response.json({ data });
}
