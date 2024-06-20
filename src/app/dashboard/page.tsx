"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Test() {
  const [newProduct, setNewProduct] = useState<{
    name: string;
    image: string;
    price: string;
    category: string;
  }>({ name: "", image: "", price: "", category: "" });

  const [sent, setSent] = useState(0);
  const [products, setProducts] = useState<any>([]);

  const handleGet = async () => {
    if (!newProduct) return;
    try {
      const res = await axios.get("/api/products");
      setProducts(res.data);
    } catch (error) {
      console.log("Error", error);
    }
  };

  const handlePost = async () => {
    if (!newProduct) return;
    try {
      await axios.post("/api/products", {
        name: newProduct.name,
        image: newProduct.image,
        price: newProduct.price,
        category: newProduct.category
      });
      console.log(newProduct);
      setSent(sent + 1);
    } catch (error) {
      console.log("Error", error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!newProduct) return;
    try {
      const res = await axios.delete(`/api/products/${id}`);
      console.log(res);
      setSent(sent + 1);
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
          name='price'
          placeholder='Precio'
          className='bg-[#ebebeb] border-none outline-none text-[12px] p-1 px-2'
          onChange={(e) => handleChange(e)}
          value={newProduct?.price}
        />
        <input
          type='text'
          name='image'
          placeholder='Imagen'
          className='bg-[#ebebeb] border-none outline-none text-[12px] p-1 px-2'
          onChange={(e) => handleChange(e)}
          value={newProduct?.image}
        />
        <input
          type='text'
          name='category'
          placeholder='Categoria'
          className='bg-[#ebebeb] border-none outline-none text-[12px] p-1 px-2'
          onChange={(e) => handleChange(e)}
          value={newProduct?.category}
        />
        <button className='bg-blue-500 p-2' onClick={handlePost}>
          API Call
        </button>
        <div className='grid grid-cols-9'>
          {products?.map((elem: any) => {
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
                <div className='flex flex-row gap-3 items-center justify-center pt-2 text-white'>
                  <button
                    className='bg-purple hover:bg-violet-900 rounded-md p-2 ho'
                    onClick={() => handleDelete(elem.id)}
                  >
                    Eliminar
                  </button>
                  <Link
                    href={`/dashboard/${elem.id}`}
                    className='bg-purple hover:bg-violet-900 rounded-md p-2'
                  >
                    Editar
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
