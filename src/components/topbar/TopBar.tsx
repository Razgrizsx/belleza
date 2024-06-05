import { FaTruck } from "react-icons/fa";

export const TopBar = () => {
  return (
    <div className="bg-ocre h-14 flex flex-row pl-32 items-center font-bold font-poppins justify-between">
      <div className="flex flex-row gap-1">
        <p className="text-[#542c6c] text-[18px] flex flex-row">
          <FaTruck className="-scale-x-100 fill-[#542c6c] flex w-5 mt-1 mr-1 items-center" />{" "}
          ENVÍOS AL INTERIOR
        </p>
        <p className="text-[#c7298e] text-[18px]">HORARIOS DE ATENCIÓN</p>
        <p className="text-white text-[18px]">LUNES A VIERNES DE 9 A 17HS</p>
      </div>
      <div className="pr-32 h-full flex flex-row items-center bg-white">
        <p className="w-12">Log in</p>
        <p>Registrarse</p>
      </div>
    </div>
  );
};
