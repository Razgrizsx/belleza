import Link from "next/link";

interface Prop {
  names: string[];
}

export const Categories = ({ names }: Prop) => {
  return (
    <div className='flex flex-col w-1/6'>
      {names.map((elem: string) => (
        <Link href={"/"}>{elem}</Link>
      ))}
    </div>
  );
};
