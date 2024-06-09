import Link from "next/link";
import { FaTruck } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

export const TopBar = () => {
  return (
    <div className='bg-ocre h-14 flex flex-row pl-32 items-center font-bold font-poppins justify-between'>
      <div className='flex flex-row gap-2'>
        <p className='text-purple text-[18px] flex flex-row'>
          <FaTruck className='-scale-x-100 fill-[#542c6c] flex w-5 mt-1 mr-1 items-center' />{" "}
          ENVÍOS AL INTERIOR
        </p>
        <p className='text-pink text-[18px]'>HORARIOS DE ATENCIÓN</p>
        <p className='text-white text-[18px]'>LUNES A VIERNES DE 9 A 17HS</p>
      </div>
      <div className='mr-32 p-8 h-full flex flex-row items-center bg-white gap-3'>
        <Link href={"/login"} className='w-12 text-ocre hover:underline'>
          Log in
        </Link>
        <Link
          href={"/register"}
          className='text-purple flex flex-row items-center gap-1 hover:underline'
        >
          Registrarse <FaEnvelope />
        </Link>
      </div>
    </div>
  );
};
