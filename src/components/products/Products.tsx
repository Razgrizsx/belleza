import { Product } from "@/types/products";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";

interface Props {
  products: Product[];
}

export const Products = ({ products }: Props) => {
  return (
    <div className='grid grid-cols-4 gap-2 w-5/6 rounded-md'>
      {products.map((elem: Product) => (
        <div className='z-50 p-2 group cursor-pointer'>
          <div className='relative '>
            <div className='absolute flex items-center justify-center top-0 left-0 bg-pink opacity-0 group-hover:opacity-30 transition ease-in-out w-full h-full z-40'></div>
            <div className='absolute flex items-center justify-center top-[calc(50%-25px)] left-[calc(50%-25px)] bg-white group-hover:opacity-100 opacity-0  rounded-full w-[50px] h-[50px] z-50'>
              <FaSearch />
            </div>
            <img className='w-full' src={elem.image} alt='padre' />
          </div>
          <Link className=' group-hover:text-pink' href={"/"}>
            {elem.name}
          </Link>
        </div>
      ))}
    </div>
  );
};
