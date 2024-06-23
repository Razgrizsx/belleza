"use client";
import { useSelector } from "react-redux";

export default function Cart() {
  const cart = useSelector((state: any) => state.cart.products);
  return (
    <div className='min-h-svh' onClick={() => console.log(cart)}>
      Carrito
      {cart?.map((elem: any) => {
        <div>{elem.name}</div>;
      })}
    </div>
  );
}
