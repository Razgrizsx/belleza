"use client";

import { useTypedSelector } from "@/redux/store";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

export const Cart = () => {
  const cart = useSelector((state: any) => state.cart.products);

  return (
    <Link className='w-5 relative' href={"/cart"}>
      <FaShoppingCart
        onClick={() => console.log(cart)}
        className='fill-[#c7298e] w-full h-full'
      />
      {cart.length > 0 && (
        <div className='absolute w-3 h-3 bg-purple text-white text-xs flex items-center justify-center rounded-full -top-1 -right-1'>
          {cart.length}
        </div>
      )}
    </Link>
  );
};
