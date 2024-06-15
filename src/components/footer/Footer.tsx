"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaFacebook,
  FaInstagram
} from "react-icons/fa";

export const Footer = () => {
  const path = usePathname();

  return (
    <footer className='h-72 w-full bg-purple p-3 pt-6 font-poppins text-white text-[15px] flex flex-row'>
      <div className='w-2/6 flex flex-col justify-start items-end'>
        <div className='w-1/2 flex flex-col justify-start items-start gap-3'>
          <div className='flex w-fit justify-start mb-3 text-[22px] font-semibold text-ocre '>
            Contactanos
          </div>

          <div className='flex flex-row items-center justify-center'>
            <FaMapMarkerAlt className='fill-[#cda860] w-3 h-3' />
            <p className='pl-2'>Pasteur 127 - CABA</p>
          </div>
          <div className='flex flex-row items-center justify-center'>
            <FaPhoneAlt className='fill-[#cda860] w-3 h-3' />
            <p className='pl-2'>4952-7534</p>
          </div>
          <div className='flex flex-row items-center justify-center'>
            <FaWhatsapp className='fill-[#cda860] w-3 h-3' />
            <p className='pl-2'>+54 9 11 4069 6478</p>
          </div>
          <div className='flex flex-row items-center justify-center'>
            <FaEnvelope className='fill-[#cda860] w-3 h-3' />
            <p className='pl-2'>pyfperfumes@hotmail.com</p>
          </div>
        </div>
      </div>

      <div className='w-1/6 flex flex-col justify-start items-end'>
        <div className='w-1/2 flex flex-col justify-start items-start gap-3'>
          <div className='flex w-fit justify-start mb-3 text-[22px] font-semibold text-ocre '>
            Seguinos
          </div>

          <div className='flex flex-row items-center justify-center'>
            <FaFacebook className='fill-[#cda860] w-3 h-3' />
            <p className='pl-2'>/casayuli</p>
          </div>
          <div className='flex flex-row items-center justify-center'>
            <FaInstagram className='fill-[#cda860] w-3 h-3' />
            <p className='pl-2'>@pyf.belleza</p>
          </div>
        </div>
      </div>

      <div className='w-3/6 flex flex-col justify-start items-center'>
        <div className='w-1/2 flex flex-col justify-start items-start gap-3'>
          <div className='flex w-fit justify-start mb-3 text-[22px] font-semibold text-ocre '>
            Contactanos
          </div>
          <Link
            href={"/"}
            className={`flex flex-row items-center justify-center cursor-pointer ${
              path === "/" ? "text-pink" : ""
            } hover:text-pink`}
          >
            <p>Productos</p>
          </Link>
          {/* <Link
            href={"/nosotros"}
            className={`flex flex-row items-center justify-center cursor-pointer ${
              path === "/nosotros" ? "text-pink" : ""
            } hover:text-pink`}
          >
            <p>Nosotros</p>
          </Link> */}
          <Link
            href={"/ofertas"}
            className={`flex flex-row items-center justify-center cursor-pointer ${
              path === "/ofertas" ? "text-pink" : ""
            } hover:text-pink`}
          >
            <p>Ofertas</p>
          </Link>
          <Link
            href={"/contacto"}
            className={`flex flex-row items-center justify-center cursor-pointer ${
              path === "/contacto" ? "text-pink" : ""
            } hover:text-pink`}
          >
            <p>Contacto</p>
          </Link>
        </div>
      </div>
    </footer>
  );
};
