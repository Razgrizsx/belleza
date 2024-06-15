"use client";

import { useEffect, useState } from "react";
import { selectedProducts } from "../../../data/products";
import { Product } from "@/types/products";
import { useSelector } from "react-redux";

export default function Producto({ params }: any) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    console.log("effect");
    setProducts(selectedProducts(params.producto));
  }, []);

  const cart = useSelector((state: any) => state.cart.products);

  return (
    <main className='flex min-h-screen flex-col'>
      <div onClick={() => console.log(products)} className='flex flex-row'>
        Producto {cart}
      </div>
    </main>
  );
}
