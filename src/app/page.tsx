import Carousel from "@/components/carrousel/Carousel";
import { Categories } from "@/components/categories/Categories";
import { NavBar } from "@/components/navBar/Navbar";
import { Products } from "@/components/products/Products";
import { TopBar } from "@/components/topbar/TopBar";
import { products } from "@/products";

export default function Home() {
  const productNames: string[] = [];
  products.map((elem) => productNames.push(elem.name));

  return (
    <main className='flex min-h-screen flex-col '>
      <div className='flex flex-row'>
        <Categories names={productNames} />
        <Products products={products} />
      </div>
    </main>
  );
}
