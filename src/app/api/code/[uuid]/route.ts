import prisma from "@/services/prisma-client";
import { NextResponse } from "next/server";

export async function PUT(
  request: Request,
  { params }: { params: { uuid: string } }
) {
  const body = await request.json();

  console.log(params.uuid);

  const data = await prisma.code.update({
    where: {
      uuid: params.uuid,
    },
    data: {
      code: body?.code,
      language: body?.language,
      theme: body?.theme,
    },
  });

  return NextResponse.json({
    message: "POST",
    data,
  });
}
