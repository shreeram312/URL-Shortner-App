import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const urls = await prisma.url.findMany({
      orderBy: {
        createAt: "desc",
      },
      take: 5,
    });
    return NextResponse.json(urls);
  } catch (e) {
    console.log(e);
  }
}
