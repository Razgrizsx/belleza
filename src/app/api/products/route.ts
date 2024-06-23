import prismadb from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, price, image, category } = await request.json();
    const newProduct = await prismadb.products.create({
      data: {
        name,
        price,
        image,
        category
      }
    });
    return NextResponse.json(newProduct);
  } catch (error: any) {
    return NextResponse.json("error Post", error);
  }
}

export async function GET() {
  try {
    const product = await prismadb.products.findMany();
    return NextResponse.json(product);
  } catch (error: any) {
    return NextResponse.json("error", error);
  }
}
