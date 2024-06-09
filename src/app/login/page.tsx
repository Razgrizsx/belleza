export default function Login() {
  return (
    <main className='flex items-center justify-center my-14 flex-col '>
      <div className='m-2 px-8 w-full mx-8 flex flex-col gap-3 justify-center items-center text-purple font-poppins pb-2'>
        <div className='font-bold text-[36px] pb-2'>LOGIN</div>
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
              />
              <button className='w-fit rounded-md bg-pink p-2 px-14 mt-3 border border-[#c7298e] text-[14px] hover:bg-white text-white hover:text-pink'>
                ENVIAR
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
