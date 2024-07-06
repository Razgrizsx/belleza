"use client";

import { useEffect, useState } from "react";
import { Product } from "@/types/products";
import { useSelector } from "react-redux";
import { useTypedDispatch } from "@/redux/store";
import { addProduct } from "@/redux/cartSlice";

export default function Producto({ params }: any) {
  const [products, setProducts] = useState<Product[]>([]);

  const dispatch = useTypedDispatch();

  const product = useSelector((state: any) => state.product.products).filter(
    (elem: any) => elem.id === params.id
  );
  const cart = useSelector((state: any) => state.cart.products);

  const handleAddCart = () => {
    const addedProduct = {
      category: product[0].category,
      id: product[0].id,
      image: product[0].image,
      name: product[0].name,
      price: product[0].price,
      quantity: 1
    };
    const filtered = cart.filter((elem: any) => elem.id === addedProduct.id);
    if (filtered.length > 0) return;
    dispatch(addProduct(addedProduct));
  };

  return (
    <main className='min-h-screen p-6'>
      <div
        className='flex w-full h-full items-center justify-center'
        onClick={() => console.log()}
      >
        {product?.map((elem: any) => {
          return (
            <div
              key={elem.name}
              className='z-50 p-2 rounded-md flex flex-col items-center justify-center gap-2'
            >
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
              <button
                className='bg-purple hover:bg-violet-900 rounded-md p-2 text-white'
                onClick={() => handleAddCart()}
              >
                Agregar al carrito
              </button>
            </div>
          );
        })}
      </div>
    </main>
  );
}
