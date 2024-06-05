import Link from "next/link";

export const NavBar = () => {
  return (
    <div className='flex items-center justify-center w-full p-2'>
      <div className='flex flex-row p-2 gap-40 font-poppins font-semibold text-xl'>
        <Link
          href={"/"}
          className='text-pink2 hover:outline hover:outline-1 hover:outline-[#cc4eae] p-1'
        >
          Productos
        </Link>
        <Link
          href={"/"}
          className='text-purple hover:outline hover:outline-1 hover:outline-[#542c6c] p-1'
        >
          Nosotros
        </Link>
        <Link
          href={"/"}
          className='text-ocre hover:outline hover:outline-1 hover:outline-[#cda860] p-1'
        >
          Ofertas
        </Link>
        <Link
          href={"/"}
          className='text-ultraPink hover:outline hover:outline-1 hover:outline-[#f53687] p-1'
        >
          Contacto
        </Link>
      </div>
    </div>
  );
};
