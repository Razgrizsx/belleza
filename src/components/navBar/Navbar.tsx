"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavBar = () => {
  const path = usePathname();

  return (
    <div className='flex items-center justify-center w-full p-2 bg-[#EBDEF0]'>
      <div className='flex flex-row p-2 gap-24 font-poppins font-semibold text-xl'>
        <Link
          href={"/"}
          className={`text-pink2 ${
            path === "/" && "outline outline-1 outline-[#cc4eae]"
          } hover:outline hover:outline-1 hover:outline-[#cc4eae] p-1 px-4`}
        >
          Productos
        </Link>
        {/* <Link
          href={"/nosotros"}
          className={`text-[#88639e] ${
            path === "/nosotros" && "outline outline-1 outline-[#88639e]"
          } hover:outline hover:outline-1 hover:outline-[#88639e] p-1 px-4`}
        >
          Nosotros
        </Link> */}
        <Link
          href={"/ofertas"}
          className={`text-ocre ${
            path === "/ofertas" && "outline outline-1 outline-[#cda860]"
          } hover:outline hover:outline-1 hover:outline-[#cda860] p-1 px-4`}
        >
          Ofertas
        </Link>
        <Link
          href={"/contacto"}
          className={`text-ultraPink ${
            path === "/contacto" && "outline outline-1 outline-[#f53687]"
          } hover:outline hover:outline-1 hover:outline-[#f53687] p-1 px-4`}
        >
          Contacto
        </Link>
      </div>
    </div>
  );
};
