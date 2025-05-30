import Image from "next/image";
import Button from "./Button";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
export default function Avatar({ profilePic }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const handleSignOut = () => {
    try {
      localStorage.removeItem("authToken");
      localStorage.removeItem("currentUser");
      localStorage.removeItem("postInfo");
      window.location.reload();

      //   router.push("http://localhost:3000/auth");
    } catch (error) {
      console.error("Error al salir de la sesion", error);
    }
  };
  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <Button onClick={() => setIsOpen(!isOpen)}>
        <Image
          alt="ProfileImage"
          width={30}
          height={30}
          className="h-8 w-8 rounded-full"
          src={
            profilePic ||
            "https://media2.dev.to/dynamic/image/width=775%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fwkz8yrhhodumbj7pnfwv.png"
          }
        />
      </Button>
      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5">
          <div className="py-1">
            <button
              className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => console.log("Configuración")}
            >
              Configuración
            </button>
            <button
              className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
              onClick={handleSignOut}
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
