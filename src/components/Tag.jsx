import Image from "next/image";
export default function Category({ icon, text, href }) {
  return (
    <div className="flex items-center gap-2 rounded-md px-4 py-2 font-sans text-black/60 hover:cursor-pointer hover:bg-[#e3e5f5] hover:text-blue-700 hover:underline">
      <span>
        {" "}
        <Image src={icon} width={30} height={30}></Image>{" "}
      </span>
      <span>{text}</span>
    </div>
  );
}
