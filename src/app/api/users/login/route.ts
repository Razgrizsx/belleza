import prismadb from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";
import { generateToken } from "../jwt";

export async function POST(request: NextRequest) {
  try {
    const { name, pass } = await request.json();
    const user = await prismadb.user.findFirst({
      where: { name: name }
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    console.log(user.pass, pass);
    if (user.pass !== pass) {
      return NextResponse.json(
        { error: "Incorrect Password" },
        { status: 404 }
      );
    }
    const token = generateToken(user);
    return NextResponse.json(token);
  } catch (error: any) {
    return NextResponse.json("Login Error", error);
  }
}

export async function GET() {
  try {
    const user = await prismadb.user.findFirst({
      where: { name: "admin@admin.com" }
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error: any) {
    console.error("Login Error:", error);

    return NextResponse.json({ error: "Login Error" }, { status: 500 });
  }
}
