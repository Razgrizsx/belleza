"use client";

import { useEffect, useState } from "react";
import { Product } from "@/types/products";
import { useSelector } from "react-redux";
import Link from "next/link";

export default function Producto({ params }: any) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {}, []);

  const product = useSelector((state: any) => state.product.products).filter(
    (elem: any) => elem.category === params.producto
  );

  return (
    <main className='min-h-screen p-6'>
      <div className='grid grid-cols-6' onClick={() => console.log()}>
        {product?.map((elem: any) => {
          return (
            <div
              key={elem.name}
              className='z-40 flex flex-col p-2 rounded-md group'
            >
              <Link
                href={`/${params.producto}/${elem.id}`}
                className='relative w-full h-full bg-white rounded-md'
              >
                <div className='absolute rounded-md circle flex items-center justify-center top-0 left-0 bg-pink opacity-0 group-hover:opacity-30 transition ease-in-out z-50'></div>
                <img
                  className='w-full h-full p-3'
                  src={elem.image}
                  alt='padre'
                />
              </Link>
              <div className=' hover:text-pink flex item-center justify-center pt-2 font-poppins font-medium text-xs text-purple'>
                {elem.name} - ${elem.price}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
