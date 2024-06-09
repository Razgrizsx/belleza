"use client";

import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

export default function Register() {
  const [capVal, setCapVal] = useState<string | null>(null);

  return (
    <main className='flex items-center justify-center my-14 flex-col '>
      <div className='m-2 px-8 w-full mx-8 flex flex-col gap-3 justify-center items-center text-purple font-poppins pb-10'>
        <div className='font-bold text-[36px] pb-2'>REGISTRATE</div>
        <div className='flex flex-col w-full gap-6'>
          <div className='text-lg text-center'>
            REGISTRATE CON TU DIRECCIÓN DE MAIL
          </div>
          <div className='flex flex-row w-full text-lg text-center gap-16 justify-center font-poppins'>
            <div className='w-4/6 flex flex-row gap-7'>
              <div className='flex flex-col gap-2 w-1/2'>
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
                  type='password'
                  placeholder='Contraseña'
                  className='bg-[#ebebeb] border-none outline-none text-[12px] p-1 px-2'
                />
                <input
                  type='password'
                  placeholder='Ingrese contraseña nuevamente'
                  className='bg-[#ebebeb] border-none outline-none text-[12px] p-1 px-2'
                />
              </div>
              <div className='flex flex-col gap-2 w-1/2'>
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
                <ReCAPTCHA
                  sitekey='6LfmIPQpAAAAAPZ6V6J1ID8ujpIzUyuYr_VqLUXq'
                  onChange={(val) => {
                    setCapVal(val);
                  }}
                  className='flex justify-end pt-4'
                />
                <div className='w-full flex justify-end'>
                  <button
                    className='w-fit flex items-end rounded-md justify-end bg-pink p-2 px-14 mt-3 border border-[#c7298e] text-[14px] hover:bg-white text-white hover:text-pink'
                    disabled={!capVal}
                  >
                    ENVIAR
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
