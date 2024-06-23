"use client";

import { useEffect, useState } from "react";
import { Product } from "@/types/products";
import { useSelector } from "react-redux";

export default function Producto({ params }: any) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {}, []);

  const product = useSelector((state: any) => state.product.products).filter(
    (elem: any) => elem.category === params.producto
  );

  return (
    <main className='min-h-screen p-6'>
      <div className='grid grid-cols-6' onClick={() => console.log(product)}>
        {product?.map((elem: any) => {
          return (
            <div key={elem.name} className='z-50 p-2 rounded-md'>
              <div className='relative bg-white rounded-md'>
                <div className='absolute rounded-md circle flex items-center justify-center top-0 left-0 bg-pink opacity-0 hover:opacity-30 transition ease-in-out z-40'></div>
                <img
                  className='w-full h-full p-1'
                  src={elem.image}
                  alt='padre'
                />
              </div>
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
