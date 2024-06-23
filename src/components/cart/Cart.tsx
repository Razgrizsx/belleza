import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

export const Cart = () => {
  return (
    <Link className='w-5' href={"/cart"}>
      <FaShoppingCart className='fill-[#c7298e] w-full h-full' />
    </Link>
  );
};
