import prisma from "@/services/prisma-client";

export async function GET(
  req: Request,
  { params }: { params: { uuid: string } }
) {
  const data = await prisma.code.findFirst({
    where: {
      uuid: params.uuid,
    },
  });

  return Response.json({ data });
}
