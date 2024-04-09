import prisma from "@/services/prisma-client";
import { v4 as uuidv4 } from "uuid";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const data = await prisma.code.create({
    data: {
      uuid: uuidv4(),
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
