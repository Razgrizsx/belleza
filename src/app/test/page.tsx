"use client";

import axios from "axios";
import { useState } from "react";

export default function Test() {
  const [newProduct, setNewProduct] = useState<{
    name: string;
    url: string;
    image: string;
  }>({ name: "name", url: "url", image: "image" });

  const handlePost = async () => {
    if (!newProduct) return;
    try {
      await axios.post("/api/products", {
        name: newProduct.name,
        url: newProduct.url,
        image: newProduct.image
      });
    } catch (error) {
      console.log("Error", error);
    }
  };

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
      </div>
    </main>
  );
}
