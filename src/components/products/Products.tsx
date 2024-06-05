import Link from "next/link";

export const Products = () => {
  const products = ["Perfumes", "Ropa", "Maquillaje", "etc"];

  return (
    <div className='flex flex-col w-5/6'>
      {products.map((elem: string) => (
        <Link href={"/"}>{elem}</Link>
      ))}
    </div>
  );
};
