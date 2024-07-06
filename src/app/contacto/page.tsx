"use client";

import { FaFacebook, FaInstagram } from "react-icons/fa";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

export default function Contacto() {
  const [capVal, setCapVal] = useState<string | null>(null);

  return (
    <main className='flex items-center justify-center my-14 flex-col '>
      <div className='m-2 px-8 w-full mx-8 flex flex-col gap-3 justify-center items-center text-purple font-poppins pb-36'>
        <div className='font-bold text-[36px] pb-2'>CONTACTO</div>
        <div className='flex flex-col w-full gap-6'>
          <div className='text-lg text-center'>
            PARA PRESUPUESTOS, CONSULTAS Y COMENTARIOS NO DUDE EN ENVIARNOS UN
            MENSAJE
          </div>
          <div className='flex flex-row w-full text-lg text-center gap-16 justify-center font-poppins'>
            <div className='flex flex-col gap-9 w-1/3 items-start justify-start'>
              <div className='text-base'>NUESTRA CENTRAL</div>
              <div className='text-[26px]'>
                <div className='flex flex-row font font-semibold text-pink'>
                  Pasteur 127
                  <p className='pl-1 font-normal text-pink'>
                    · Capital Federal
                  </p>
                </div>
                <div className='flex items-start text-[#4d4d4d]'>
                  Buenos Aires · Argentina
                </div>
              </div>
              <div>NUESTRA LÍNEA</div>
              <div className='text-[26px] text-[#4d4d4d]'>(011) 4952-7534</div>
              <div>WHATSAPP</div>
              <div className='text-[26px] text-[#337ab7] cursor-pointer hover:underline'>
                +54 9 11 4069 6478
              </div>
              <div className='flex flex-row gap-9'>
                <div>
                  <div className='text-start text-[16px]'>EMAIL</div>
                  <div className='text-[24px] text-[#4d4d4d] cursor-pointer pt-2 hover:text-pink'>
                    pyfperfumes@hotmail.com
                  </div>
                </div>
                <div>
                  <div className='text-start text-[16px] pb-3'>
                    NUESTRAS REDES
                  </div>
                  <div className='flex flex-row gap-2'>
                    <FaFacebook className='fill-[#8d8d8d] hover:fill-[#c7298e] cursor-pointer w-6 h-6' />
                    <FaInstagram className='fill-[#8d8d8d] hover:fill-[#c7298e] cursor-pointer w-6 h-6' />
                  </div>
                </div>
              </div>
            </div>
            <div className='w-1/3 flex flex-col gap-2'>
              <input
                type='text'
                placeholder='NOMBRE'
                className='bg-[#ebebeb] border-none outline-none text-[12px] p-1 px-2'
              />
              <input
                type='text'
                placeholder='APELLIDO'
                className='bg-[#ebebeb] border-none outline-none text-[12px] p-1 px-2'
              />
              <input
                type='text'
                placeholder='MAIL'
                className='bg-[#ebebeb] border-none outline-none text-[12px] p-1 px-2'
              />
              <input
                type='text'
                placeholder='TELEFONO'
                className='bg-[#ebebeb] border-none outline-none text-[12px] p-1 px-2'
              />
              <input
                type='text'
                placeholder='DIRECCION'
                className='bg-[#ebebeb] border-none outline-none text-[12px] p-1 px-2'
              />
              <input
                type='text'
                placeholder='CUIT'
                className='bg-[#ebebeb] border-none outline-none text-[12px] p-1 px-2'
              />
              <input
                type='text'
                placeholder='TRANSPORTE'
                className='bg-[#ebebeb] border-none outline-none text-[12px] p-1 px-2'
              />
              <textarea
                placeholder='MENSAJE'
                className='bg-[#ebebeb] border-none outline-none text-[12px] p-1 px-2 h-24'
              />
              <ReCAPTCHA
                sitekey='6LfmIPQpAAAAAPZ6V6J1ID8ujpIzUyuYr_VqLUXq'
                onChange={(val) => {
                  setCapVal(val);
                }}
              />
              <button
                className='w-fit rounded-md bg-pink p-2 px-14 mt-3 border border-[#c7298e] text-[14px] hover:bg-white text-white hover:text-pink'
                disabled={!capVal}
              >
                ENVIAR
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
