import NavPost from "@/components/NavPost";
import PostForm from "@/components/PostForm";

export default function () {
  return (
    <section className="mx-auto min-h-screen max-w-6xl">
      <section className="md:flex md:gap-3 md:p-3">
        <section className="flex flex-col gap-3.5 md:flex-2/3">
          <NavPost></NavPost>
          <PostForm></PostForm>
        </section>
        <section className="hidden border border-red-600 md:block md:flex-1/3">
          {" "}
          Aqui es donde estara el mensaje de escribit el post
        </section>
      </section>
    </section>
  );
}
