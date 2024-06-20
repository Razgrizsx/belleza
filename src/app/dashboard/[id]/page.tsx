"use client";

import Producto from "@/app/[producto]/page";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditProduct() {
  const [product, setProduct] = useState<{
    name: string;
    image: string;
    price: string;
    category: string;
  }>({ name: "", image: "", price: "", category: "" });

  const params = useParams<{ tag: string; id: string }>();

  const [sent, setSent] = useState(0);

  const handleGet = async () => {
    if (!product) return;
    try {
      const res = await axios.get(`/api/products/${params.id}`);
      setProduct(res.data);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    handleGet();
  }, [sent]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleEdit = async () => {
    try {
      await axios.put(`/api/products/${params.id}`, {
        name: product.name,
        image: product.image,
        price: product.price,
        category: product.category
      });
      setSent(sent + 1);
    } catch (error) {
      console.log("Error", error);
    }
    console.log(params.id);
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
          value={product.name}
        />
        <input
          type='text'
          name='price'
          placeholder='Precio'
          className='bg-[#ebebeb] border-none outline-none text-[12px] p-1 px-2'
          onChange={(e) => handleChange(e)}
          value={product.price}
        />
        <input
          type='text'
          name='image'
          placeholder='Imagen'
          className='bg-[#ebebeb] border-none outline-none text-[12px] p-1 px-2'
          onChange={(e) => handleChange(e)}
          value={product.image}
        />
        <input
          type='text'
          name='category'
          placeholder='Categoria'
          className='bg-[#ebebeb] border-none outline-none text-[12px] p-1 px-2'
          onChange={(e) => handleChange(e)}
          value={product.category}
        />
        <button
          className='bg-blue-500 rounded-md p-2'
          onClick={() => handleEdit()}
        >
          Editar
        </button>
        <div className='flex w-full h-full items-center justify-center'>
          <div key={product.name} className='z-50 p-2 rounded-md'>
            <div className='relative bg-white rounded-md'>
              <div className='absolute rounded-md circle flex items-center justify-center top-0 left-0 bg-pink opacity-0 hover:opacity-30 transition ease-in-out z-40'></div>
              <img
                className='w-full h-full p-1'
                src={product.image}
                alt='padre'
              />
            </div>
            <div className=' hover:text-pink flex item-center justify-center pt-2 font-poppins font-medium text-xs text-purple'>
              {product.name} - ${product.price} - {product.category}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
