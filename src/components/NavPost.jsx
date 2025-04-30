import Image from "next/image";
import Button from "./Button";

export default function NavPost() {
  return (
    <nav className="flex justify-end md:justify-between">
      <div className="hidden md:flex md:items-center md:gap-2.5">
        <Image
          width={50}
          height={50}
          alt="Logo"
          src="https://media2.dev.to/dynamic/image/quality=100/https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
        ></Image>
        <h2>Create post</h2>
      </div>
      <div>
        <Button className="text-black/90" variant="text">
          Edit
        </Button>
        <Button className="text-black/90" variant="text">
          Preview
        </Button>
        <Button className="text-black/90" variant="text">
          x
        </Button>
      </div>
    </nav>
  );
}
