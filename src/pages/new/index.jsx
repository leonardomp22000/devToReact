import NavPost from "@/components/NavPost";
import PostForm from "@/components/PostForm";
import PostMessage from "@/components/PostMessage";
import { useAuth } from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function New() {
  const { loading, isLogged } = useAuth();
  const router = useRouter(); // Usar el state en react, para condicionar componentes, se importa useRouter
  const [isEdit, setIsEdit] = useState(false); //Usamos useState, para controlar el estado de los componentes

  useEffect(() => {
    // Usamos useEffect para el renderizado de los componentes por primera vez
    //Asegurarse de que router.query ya este disponible
    if (!loading && !isLogged) {
      router.replace("/");
    }
    if (router.isReady) {
      const state = router.query.state; //Obtenemos el estado del query
      setIsEdit(state === "edit"); // Se compara y se usa el useState para cambiar de estado segun convenga
    }
  }, [router.isReady, router.query.state, router, loading, isLogged]); // Declaracion array de dependencias
  if (loading) return <p className="mt-10 text-center">Cargando...</p>;
  if (!isLogged) return null;

  // const router = useRouter();
  // const { isLogged, loading } = useAuth();

  // useEffect(() => {
  //   if (!loading && !isLogged) {
  //     router.push("/");
  //   }
  // }, [isLogged, loading, router]);

  // if (loading || !isLogged) {
  //   return <p className="mt-10 text-center">Cargando...</p>;
  // }

  return (
    <section className="mx-auto min-h-screen max-w-6xl">
      <section className="md:flex md:gap-3 md:p-3">
        <section className="flex flex-col gap-3.5 md:flex-2/3">
          <NavPost></NavPost>
          <PostForm isEdit={isEdit}></PostForm>
        </section>
        <section className="hidden w-full flex-col justify-evenly md:flex">
          <PostMessage />
        </section>
      </section>
    </section>
  );
}
