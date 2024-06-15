"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function Test() {
  const [newProduct, setNewProduct] = useState<{
    name: string;
    url: string;
    image: string;
  }>({ name: "", url: "", image: "" });

  const [sent, setSent] = useState(0);
  const [products, setProducts] = useState<any>([]);

  const handlePost = async () => {
    if (!newProduct) return;
    try {
      await axios.post("/api/products", {
        name: newProduct.name,
        url: newProduct.url,
        image: newProduct.image
      });
      setSent(sent + 1);
    } catch (error) {
      console.log("Error", error);
    }
  };

  const handleGet = async () => {
    if (!newProduct) return;
    try {
      const res = await axios.get("/api/products");
      setProducts(res.data);
    } catch (error) {
      console.log("Error", error);
    }
  };
  useEffect(() => {
    handleGet();
  }, [sent]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewProduct((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <main className='flex items-center justify-center my-14 flex-col '>
      <div className='m-2 px-8 w-full mx-8 flex flex-col gap-3 justify-center items-center text-purple font-poppins pb-10'>
        <input
          type='text'
          placeholder='Nombre'
          name='name'
          className='bg-[#ebebeb] border-none outline-none text-[12px] p-1 px-2'
          onChange={(e) => handleChange(e)}
          value={newProduct?.name}
        />
        <input
          type='text'
          name='url'
          placeholder='Url'
          className='bg-[#ebebeb] border-none outline-none text-[12px] p-1 px-2'
          onChange={(e) => handleChange(e)}
          value={newProduct?.url}
        />
        <input
          type='text'
          name='image'
          placeholder='Imagen'
          className='bg-[#ebebeb] border-none outline-none text-[12px] p-1 px-2'
          onChange={(e) => handleChange(e)}
          value={newProduct?.image}
        />
        <button className='bg-blue-500 p-2' onClick={handlePost}>
          API Call
        </button>
        <div className='flex flex-row'>
          {products?.map((elem: any) => {
            return (
              <Link
                href={`/${elem.url}`}
                key={elem.name}
                className='z-50 p-2 group cursor-pointer rounded-md'
              >
                <div className='relative bg-white rounded-md'>
                  <div className='absolute rounded-md group circle flex items-center justify-center top-0 left-0 bg-pink opacity-0 group-hover:opacity-30 transition ease-in-out w-full h-full z-40'></div>
                  <div className='absolute  flex items-center justify-center top-[calc(50%-50px)] left-[calc(50%-50px)] bg-white rounded-full ease-in-out w-[0px] h-[0px] group-hover:scale-100 group-hover:w-[100px] group-hover:h-[100px] transform transition-all duration-300 hover:bg-pink z-50'>
                    <FaSearch className='w-12 h-12 fill-[#cda860] hover:fill-white' />
                  </div>
                  <img className='w-full p-1' src={elem.image} alt='padre' />
                </div>
                <div className=' group-hover:text-pink flex item-center justify-center pt-2 font-poppins font-medium text-base text-purple'>
                  {elem.name}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
