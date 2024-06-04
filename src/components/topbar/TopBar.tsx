import { FaTruck } from "react-icons/fa";

export const TopBar = () => {
  return (
    <div className="bg-ocre h-14 flex flex-row pl-9 items-center font-bold font-poppins">
      <FaTruck className="-scale-x-100 fill-[#542c6c] h-full w-5" />
      <div>ENVÍOS AL INTERIOR</div>
      <div>HORARIOS DE ATENCIÓN</div>
      <div>LUNES A VIERNES DE 9 A 17HS</div>
    </div>
  );
};
