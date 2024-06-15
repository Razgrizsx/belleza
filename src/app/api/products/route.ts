import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

async function POST(request: NextResponse) {
  try {
    const { name, url, image } = await request.json();
    const newProduct = await prismadb.products.create({
      data: {
        name,
        url,
        image
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
