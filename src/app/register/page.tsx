"use client";

import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [capVal, setCapVal] = useState<string | null>(null);
  const [user, setUser] = useState<{
    name: string;
    pass: string;
    role: string;
  }>({ name: "", pass: "", role: "user" });
  const [pass2, setPass2] = useState("");
  const [error, setError] = useState({ name: "", pass: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError({ name: "", pass: "" });
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async () => {
    if (user.pass !== pass2) {
      setError({ name: "", pass: "La contraseña no coincide" });
    } else {
      try {
        await axios.post(`/api/users`, {
          name: user.name,
          pass: user.pass,
          role: user.role
        });
      } catch (error) {
        console.log("Error", error);
      }
    }
  };

  const handleGet = async () => {
    console.log(user);
    try {
      const res = await axios.get(`/api/users`);
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <main className='flex items-center justify-center my-14 flex-col '>
      <div className='m-2 px-8 w-full mx-8 flex flex-col gap-3 justify-center items-center text-purple font-poppins pb-10'>
        <div className='font-bold text-[36px] pb-2' onClick={() => handleGet()}>
          REGISTRATE
        </div>
        <div className='flex flex-col w-full gap-6'>
          <div className='text-lg text-center'>
            REGISTRATE CON TU DIRECCIÓN DE MAIL
          </div>
          <div className='flex flex-row w-full text-lg text-center gap-16 justify-center font-poppins'>
            <div className='w-2/6 flex flex-row gap-7'>
              <div className='flex flex-col gap-2 w-full'>
                <input
                  type='text'
                  placeholder='MAIL'
                  name='name'
                  className='bg-[#ebebeb] border-none outline-none text-[12px] p-1 px-2'
                  onChange={(e) => handleChange(e)}
                />
                {error && <div>{error.name}</div>}
                <input
                  type='password'
                  placeholder='Contraseña'
                  name='pass'
                  className='bg-[#ebebeb] border-none outline-none text-[12px] p-1 px-2'
                  onChange={(e) => handleChange(e)}
                />
                <input
                  type='password'
                  placeholder='Ingrese contraseña nuevamente'
                  name='pass2'
                  className='bg-[#ebebeb] border-none outline-none text-[12px] p-1 px-2'
                  onChange={(e) => {
                    setPass2(e.target.value), setError({ name: "", pass: "" });
                  }}
                />
                {error && <div>{error.pass}</div>}
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
                    onClick={() => handleSubmit()}
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
