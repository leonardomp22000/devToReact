import NavPost from "@/components/NavPost";
import PostForm from "@/components/PostForm";
import PostMessage from "@/components/PostMessage";
import { useAuth } from "@/hooks/useAuth";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function New() {
  const router = useRouter();
  const { isLogged, loading } = useAuth();

  useEffect(() => {
    if (!loading && !isLogged) {
      router.push("/");
    }
  }, [isLogged, loading, router]);

  if (loading || !isLogged) {
    return <p className="mt-10 text-center">Cargando...</p>;
  }

  return (
    <section className="mx-auto min-h-screen max-w-6xl">
      <section className="md:flex md:gap-3 md:p-3">
        <section className="flex flex-col gap-3.5 md:flex-2/3">
          <NavPost></NavPost>
          <PostForm></PostForm>
        </section>
        <section className="hidden w-full flex-col justify-evenly md:flex">
          <PostMessage />
        </section>
      </section>
    </section>
  );
}
