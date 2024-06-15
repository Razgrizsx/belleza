import { Categories } from "@/components/categories/Categories";
import { Products } from "@/components/products/Products";
import { products } from "@/../data/products";

export default function Home() {
  const productNames: string[] = [];
  products.map((elem) => productNames.push(elem.name));

  return (
    <main className='flex min-h-screen flex-col bg-[#EBDEF0]'>
      <div className='flex flex-row'>
        <Categories names={productNames} />
        <Products products={products} />
      </div>
    </main>
  );
}
