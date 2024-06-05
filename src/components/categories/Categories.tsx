import Link from "next/link";

interface Prop {
  names: string[];
}

export const Categories = ({ names }: Prop) => {
  return (
    <div className='flex flex-col w-1/6 p-2 text-pink2 font-poppins'>
      {names.map((elem: string) => (
        <Link key={elem} href={"/"} className='p-1 hover:font-bold'>
          {elem}
        </Link>
      ))}
    </div>
  );
};
