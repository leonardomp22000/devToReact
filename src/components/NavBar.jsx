import Button from "./Button";
import Image from "next/image";
import SearchBar from "./SearchBar";
import { Bars3Icon } from "@heroicons/react/24/outline";
export default function NavBar() {
  return (
    <nav className="flex justify-between border-b border-b-gray-200 bg-white p-2.5">
      <div className="flex gap-2 md:flex-2/3">
        <div className="md:hidden">
          <Button className="!p-1">
            <Bars3Icon width={30} height={30} />
          </Button>
        </div>
        <Image
          width={50}
          height={50}
          alt="Logo"
          src="https://media2.dev.to/dynamic/image/quality=100/https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
        ></Image>
        <div className="hidden w-full md:block">
          <SearchBar />
        </div>
      </div>

      <div className="flex justify-end gap-2.5 md:flex-1/3">
        <div className="hidden md:block">
          <Button variant="text">Log in</Button>
        </div>

        <Button variant="outlined">Create Account</Button>
      </div>
    </nav>
  );
}
