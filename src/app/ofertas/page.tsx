import { Product } from "@/types/products";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { products } from "@/products";
import { Categories } from "@/components/categories/Categories";
import { Products } from "@/components/products/Products";

const Ofertas = () => {
  const productNames: string[] = [];
  products.map((elem) => productNames.push(elem.name));

  return (
    <main className='flex min-h-screen flex-col'>
      <div className='flex flex-row'>
        <Categories names={productNames} />
        <div className='grid grid-cols-4 gap-2 w-5/6 rounded-md'>
          {products.map((elem: Product) => (
            <div className='z-50 p-2 group cursor-pointer rounded-md'>
              <div className='relative '>
                <div className='absolute rounded-md group circle flex items-center justify-center top-0 left-0 bg-pink opacity-0 group-hover:opacity-30 transition ease-in-out w-full h-full z-40'></div>
                <div className='absolute  flex items-center justify-center top-[calc(50%-50px)] left-[calc(50%-50px)] bg-white rounded-full ease-in-out w-[0px] h-[0px] group-hover:scale-100 group-hover:w-[100px] group-hover:h-[100px] transform transition-all duration-300 hover:bg-pink z-50'>
                  <FaSearch className='w-12 h-12 fill-[#cda860] hover:fill-white' />
                </div>
                <img className='w-full p-1' src={elem.image} alt='padre' />
              </div>
              <Link
                className=' group-hover:text-pink flex item-center justify-center pt-2 font-poppins font-medium text-base text-purple'
                href={"/"}
              >
                {elem.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Ofertas;
