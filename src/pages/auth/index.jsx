import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import LoginOptions from "@/components/LoginOptions";
import LoginForm from "@/components/LoginForm";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
export default function AuthPage() {
  const { loading, isLogged } = useAuth();
  const router = useRouter(); // Usar el state en react, para condicionar componentes, se importa useRouter
  const [isRegistered, setIsRegister] = useState(false); //Usamos useState, para controlar el estado de los componentes

  useEffect(() => {
    // Usamos useEffect para el renderizado de los componentes por primera vez
    //Asegurarse de que router.query ya este disponible
    if (!loading && isLogged) {
      router.replace("/");
    }
    if (router.isReady) {
      const state = router.query.state; //Obtenemos el estado del query
      setIsRegister(!(state === "new-user")); // Se compara y se usa el useState para cambiar de estado segun convenga
    }
  }, [router.isReady, router.query.state, router, loading, isLogged]); // Declaracion array de dependencias
  if (loading) return <p className="mt-10 text-center">Cargando...</p>;
  if (isLogged) return null;
  return (
    <main className="bg-white p-4 md:p-10">
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
        <LoginOptions isRegistered={isRegistered}></LoginOptions>

        {isRegistered && (
          <div className="flex w-full flex-col justify-evenly">
            {/* <div>
              <span className="w-full border border-gray-200"></span>
              <div>OR</div>
              <div className="w-full border border-gray-200"></div>
            </div> */}

            <div className="mx-auto">OR</div>

            <LoginForm></LoginForm>
          </div>
        )}

        <p className="mx-auto max-w-96 text-center text-sm text-black/70 italic">
          By signing in, you are agreeing to our privacy policy, terms of use
          and code of conduct.
        </p>

        <div className="w-full border border-gray-200"></div>
        <div className="mb-14 flex justify-center text-sm">
          <p className="font-sans">
            {isRegistered
              ? "New to dev community?"
              : "Already have an account?"}{" "}
          </p>

          <Link
            className="font-sans text-blue-700 hover:underline"
            href="/auth"
          >
            {isRegistered ? "Create account" : "Log in"}
          </Link>
        </div>
      </section>
    </main>
  );
}
