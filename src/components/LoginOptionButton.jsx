import Button from "./Button";
import Image from "next/image";
export default function LoginOptionButton({ option, logo }) {
  return (
    <Button className="w-full border border-gray-200 hover:bg-gray-200">
      <div className="flex w-full items-center">
        <Image src={logo} width={30} height={30}></Image>

        <span className="flex w-full items-center justify-center self-center text-sm text-black/85">
          {option}
        </span>
      </div>
    </Button>
  );
}
