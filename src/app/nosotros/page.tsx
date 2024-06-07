import { FaGem } from "react-icons/fa";

export default function Nosotros() {
  return (
    <main className='flex items-center justify-center min-h-screen flex-col m-8 mx-20'>
      <img
        className='w-full'
        src='https://casayuli.com.ar/pics/nosotros-banner.jpg'
        alt='nosotros'
      />

      <div className='m-2 px-8 w-full mx-8 flex flex-col gap-3 justify-center items-center text-purple font-poppins'>
        <FaGem className='w-[35px] h-[35px] mt-8' fill='#cda860' />
        <div className='font-bold text-2xl pb-2'>QUIÉNES SOMOS</div>
        <div className='flex flex-col gap-6'>
          <div className='text-lg text-center'>
            Distribuidora Casa Yuli fue fundada en 1964 y desde entonces nuestro
            compromiso es ofrecer al cliente atención personalizada y brindarle
            todas las herramientas para que su negocio y nuestra relación
            comercial crezcan permanentemente.
          </div>
          <div className='text-lg text-center'>
            Nos ocupamos personalmente de cada orden de compra, respetando los
            artículos y colores que el cliente haya pedido y asesorándolo en
            cuanto a las tendencias de la moda que viene.
          </div>
          <div className='text-lg text-center'>
            Somos distribuidores de marcas reconocidas como Katalia, Jactans,
            Cannon, Tejar, Midie y Mary Bosques desde hace más de 40 años, lo
            que demuestra una conducta de trabajo intachable.
          </div>
          <div className='text-lg text-center'>
            Ahora nos hemos lanzado al mercado digital para ofrecer un servicio
            práctico a nuestra cartera de clientes y para que nuevos o
            potenciales clientes puedan observar y comparar todos nuestros
            productos, colores y precios.
          </div>
          <div className='text-lg text-center'>
            Nuestra misión es “Hacer de cada cliente un amigo de la casa”
          </div>
        </div>
      </div>
    </main>
  );
}
