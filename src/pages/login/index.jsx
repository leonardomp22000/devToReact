import Image from "next/image";
import LoginOptions from "@/components/LoginOptions";
export default function Login() {
  return (
    <main className="bg-white p-10">
      <section className="mx-auto flex max-w-xl flex-col gap-4">
        <Image
          height={42}
          width={60}
          className="mx-auto"
          src={"/Icons/logoDevTo.png"}
        ></Image>
        <div>
          <p className="text-center font-sans text-3xl font-bold text-black/90">
            Join the DEV Community
          </p>
          <p className="text-center font-sans text-black/70">
            DEV Community is a community of 3,014,410 amazing developers
          </p>
        </div>
        <LoginOptions></LoginOptions>
      </section>
    </main>
  );
}
