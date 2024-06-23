"use client";
import { Categories } from "@/components/categories/Categories";
import { Products } from "@/components/products/Products";
import { products } from "@/../data/products";
import { useSelector } from "react-redux";

export default function Home() {
  const productNames: string[] = [];
  products.map((elem) => productNames.push(elem.name));
  const product = useSelector((state: any) => state.product.products);

  return (
    <main className='flex min-h-screen flex-col bg-[#EBDEF0]'>
      <button
        onClick={() => {
          console.log(product);
        }}
      >
        Info
      </button>
      <div className='flex flex-row'>
        <Categories names={productNames} />
        <Products products={products} />
      </div>
    </main>
  );
}
