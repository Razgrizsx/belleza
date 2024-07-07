"use client";

import axios from "axios";
import { useState } from "react";
import Cookies from "universal-cookie";
import jwt, { jwtDecode } from "jwt-decode";

export default function Login() {
  const [login, setLogin] = useState({ name: "", pass: "" });
  const [error, setError] = useState("");
  const cookies = new Cookies();

  const handleChange = (e: any) => {
    setError("");
    setLogin((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post(`/api/users/login`, {
        name: login.name,
        pass: login.pass
      });
      console.log(res.data);
      if (res.data) {
        const decode = jwtDecode(res.data);
        cookies.set("userData", decode, {
          expires: new Date(decode.exp! * 1000)
        });
        setError("");
        console.log(decode);
      }
    } catch (error: any) {
      setError(error.response.data.error);
    }
  };

  const handleGet = async () => {
    const data = cookies.get("userData");
    console.log(data);
  };

  return (
    <main className='flex items-center justify-center my-14 flex-col '>
      <div className='m-2 px-8 w-full mx-8 flex flex-col gap-3 justify-center items-center text-purple font-poppins pb-2'>
        <div className='font-bold text-[36px] pb-2' onClick={handleGet}>
          LOGIN
        </div>
        <div className='flex flex-col w-full gap-6'>
          <div className='text-lg text-center'>INICIA SESIÓN</div>
          <div className='flex flex-row w-full text-lg text-center gap-16 justify-center font-poppins'>
            <div className='w-1/4 flex flex-col gap-2 items-center'>
              <label
                htmlFor=''
                className='text-[14px] text-black font-semibold'
              >
                Usuario/Mail:
              </label>
              <input
                type='text'
                placeholder=''
                className='bg-[#ebebeb] border-none outline-none text-[12px] p-1 w-full'
                name='name'
                onChange={handleChange}
              />
              <label
                htmlFor=''
                className='text-[14px] text-black font-semibold'
              >
                Contraseña:
              </label>

              <input
                type='password'
                placeholder=''
                className='bg-[#ebebeb] border-none outline-none text-[12px] p-1 w-full'
                name='pass'
                onChange={handleChange}
              />
              <button
                className='w-fit rounded-md bg-pink p-2 px-14 mt-3 border border-[#c7298e] text-[14px] hover:bg-white text-white hover:text-pink'
                onClick={handleSubmit}
              >
                ENVIAR
              </button>
              {error}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
