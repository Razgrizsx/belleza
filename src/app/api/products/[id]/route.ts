import prismadb from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const product = await prismadb.products.findUnique({
      where: {
        id: params.id
      }
    });
    return NextResponse.json(product);
  } catch (error: any) {
    return NextResponse.json("error Get", error);
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    console.log(params);
    const response = await prismadb.products.delete({
      where: { id: params.id }
    });
    return NextResponse.json(response);
  } catch (error: any) {
    return NextResponse.json("error Delete", error);
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    console.log(params);
    const { name, price, image, category } = await request.json();
    const response = await prismadb.products.update({
      where: { id: params.id },
      data: {
        name,
        price,
        image,
        category
      }
    });
    return NextResponse.json(response);
  } catch (error: any) {
    return NextResponse.json("error Update", error);
  }
}
