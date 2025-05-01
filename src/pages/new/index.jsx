import NavPost from "@/components/NavPost";
import PostTitle from "@/components/PostTitle";
import ActionBarPost from "@/components/ActionBarPost";
export default function () {
  return (
    <section className="mx-auto max-w-6xl border border-red-800">
      <section className="md:flex md:gap-3 md:p-3">
        <section className="flex flex-col gap-3.5 md:flex-2/3">
          <NavPost></NavPost>

          <PostTitle></PostTitle>

          <ActionBarPost></ActionBarPost>

          <div className="border border-red-600">
            {" "}
            Esta es la seccion del contenido del post
          </div>
          <div className="border border-red-600">
            {" "}
            Esta es la seccion de los botones de acciones
          </div>
        </section>
        <section className="hidden border border-red-600 md:block md:flex-1/3">
          {" "}
          Aqui es donde estara el mensaje de escribit el post
        </section>
      </section>
    </section>
  );
}
