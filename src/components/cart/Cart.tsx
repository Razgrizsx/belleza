"use client";

import { useTypedSelector } from "@/redux/store";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

export const Cart = () => {
  const cart = useSelector((state: any) => state.cart.products);

  return (
    <Link className='w-5' href={"/cart"}>
      <FaShoppingCart
        onClick={() => console.log(cart)}
        className='fill-[#c7298e] w-full h-full'
      />
    </Link>
  );
};
