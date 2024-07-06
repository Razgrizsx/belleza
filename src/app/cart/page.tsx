"use client";
import { changeQuantity, deleteProduct } from "@/redux/cartSlice";
import { useTypedDispatch } from "@/redux/store";
import { useSelector } from "react-redux";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function Cart() {
  const cart = useSelector((state: any) => state.cart.products);
  const dispatch = useTypedDispatch();

  const handleDeleteCart = (id: string) => {
    dispatch(deleteProduct(id));
  };

  const handleNumber = (product: any, type: string) => {
    dispatch(changeQuantity([product, type]));
  };

  return (
    <div className='w-full flex flex-col items-center justify-start min-h-[80vh] pt-11'>
      {cart.length > 0 ? (
        cart?.map((elem: any) => {
          return (
            <div
              key={elem.name}
              className='z-50 w-[30%] h-40 flex flex-row items-center justify-center gap-3 p-2 rounded-md border border-[#cda860]'
            >
              <div className='relative w-[50%] h-full bg-transparent rounded-md flex items-center justify-center'>
                <img
                  className='flex items-start h-full justify-center p-1'
                  src={elem.image}
                  alt='padre'
                />
              </div>
              <div className='flex flex-col gap-2 h-full w-[50%]'>
                <div className=' hover:text-pink flex item-start justify-start pt-2 font-poppins font-medium text-xs text-purple'>
                  {elem.name} - ${elem.price}
                </div>
                <button
                  className='bg-purple w-fit h-10 hover:bg-violet-900 rounded-md p-2 text-white'
                  onClick={() => handleDeleteCart(elem.id)}
                >
                  Borrar
                </button>
                <div className='flex flex-row items-center gap-2'>
                  <FaMinus
                    className='w-3 h-3 cursor-pointer'
                    onClick={() => handleNumber(elem, "minus")}
                  />
                  {elem.quantity}
                  <FaPlus
                    className='w-3 h-3 cursor-pointer'
                    onClick={() => handleNumber(elem, "plus")}
                  />
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className='bg-ocre text-purple rounded-md p-4 text-2xl'>
          El carrito esta vacio
        </div>
      )}
    </div>
  );
}
