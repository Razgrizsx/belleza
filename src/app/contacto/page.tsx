import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Contacto() {
  return (
    <main className='flex items-center justify-center my-14 flex-col mx-20'>
      <div className='m-2 px-8 w-full mx-8 flex flex-col gap-3 justify-center items-center text-purple font-poppins pb-36'>
        <div className='font-bold text-2xl pb-2'>CONTACTO</div>
        <div className='flex flex-col w-full gap-6'>
          <div className='text-lg text-center'>
            PARA PRESUPUESTOS, CONSULTAS Y COMENTARIOS NO DUDE EN ENVIARNOS UN
            MENSAJE
          </div>
          <div className='flex flex-row w-full text-lg text-center gap-2 justify-center'>
            <div className='w-1/3'>
              <div>NUESTRA CENTRAL</div>
              <div>Pasteur 127 · Capital Federal</div>
              <div>Buenos Aires · Argentina</div>
              <div>NUESTRA LÍNEA</div>
              <div>(011) 4952-7534</div>
              <div>WHATSAPP</div>
              <div>+54 9 11 4069 6478</div>
              <div className='flex flex-row'>
                <div>
                  <div>EMAIL</div>
                  <div>casayulisrl@gmail.com</div>
                </div>
                <div>
                  <div>NUESTRAS REDES</div>
                  <div>
                    <FaFacebook />
                    <FaInstagram />
                  </div>
                </div>
              </div>
            </div>
            <div className='w-1/3'>2</div>
          </div>
        </div>
      </div>
    </main>
  );
}
