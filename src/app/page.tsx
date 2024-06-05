import Carousel from "@/components/carrousel/Carousel";
import { Categories } from "@/components/categories/Categories";
import { Products } from "@/components/products/Products";
import { TopBar } from "@/components/topbar/TopBar";

export default function Home() {
  const images = [
    "https://concepto.de/wp-content/uploads/2019/11/producto-packaging-e1572738514178.jpg",
    "https://www.webconsultas.com/sites/default/files/styles/wch_image_schema/public/articulos/productos-lacteos.jpg"
  ];

  return (
    <main className='flex min-h-screen flex-col '>
      <TopBar />
      <Carousel images={images} />
      <div className='flex flex-row'>
        <Categories />
        <Products />
      </div>
    </main>
  );
}
