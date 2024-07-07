import prismadb from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, role, pass } = await request.json();
    const newUser = await prismadb.user.create({
      data: {
        role,
        name,
        pass
      }
    });
    return NextResponse.json(newUser);
  } catch (error: any) {
    return NextResponse.json("error Post", error);
  }
}

export async function GET() {
  try {
    const users = await prismadb.user.findMany();
    return NextResponse.json(users);
  } catch (error: any) {
    return NextResponse.json("error", error);
  }
}
