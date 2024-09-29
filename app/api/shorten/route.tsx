import prisma from "@/lib/db";
import { X } from "lucide-react";
import { nanoid } from "nanoid";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { url } = await req.json();
  const ShortCode = nanoid(8);
  const shortenUrl = await prisma.url.create({
    data: {
      originalUrl: url,
      ShortCode,
    },
  });

  return NextResponse.json({
    ShortCode: shortenUrl.ShortCode,
  });
}
