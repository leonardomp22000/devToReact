import Button from "./Button";
import Image from "next/image";
import SearchBar from "./SearchBar";
import Link from "next/link";
import Avatar from "./Avatar";
import { Bars3Icon } from "@heroicons/react/24/outline";
export default function NavBar({ isLogged, query, setQuery, profilePic }) {
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
          alt="DevToLogo"
          src="https://media2.dev.to/dynamic/image/quality=100/https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
        ></Image>
        <div className="hidden w-full md:block">
          <SearchBar query={query} setQuery={setQuery} />
        </div>
      </div>

      {!isLogged ? (
        <div className="flex justify-end gap-2.5 md:flex-1/3">
          <Link className="hidden md:block" href="/auth">
            <Button variant="text">Log in</Button>
          </Link>
          <Link href="/auth?state=new-user">
            <Button variant="outlined">Create Account</Button>
          </Link>
        </div>
      ) : (
        <div className="flex items-center justify-end gap-2.5 md:flex-1/3">
          <Link href="/new">
            <Button variant="outlined">Create Post</Button>
          </Link>
          <Avatar profilePic={profilePic}></Avatar>
        </div>
      )}
    </nav>
  );
}
