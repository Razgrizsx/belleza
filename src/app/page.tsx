import Carousel from "@/components/carrousel/Carousel";
import { Categories } from "@/components/categories/Categories";
import { Products } from "@/components/products/Products";
import { TopBar } from "@/components/topbar/TopBar";
import { products } from "@/products";

export default function Home() {
  const images = [
    "https://casayuli.com.ar/uploads/filemanager/banner-home.jpg",
    "https://casayuli.com.ar/uploads/filemanager/banner-home.jpg"
  ];

  const productNames: string[] = [];
  products.map((elem) => productNames.push(elem.name));

  return (
    <main className='flex min-h-screen flex-col '>
      <TopBar />
      <Carousel images={images} />
      <div className='flex flex-row'>
        <Categories names={productNames} />
        <Products products={products} />
      </div>
    </main>
  );
}
