import NavPost from "@/components/NavPost";
import PostForm from "@/components/PostForm";
import PostMessage from "@/components/PostMessage";

export default function () {
  return (
    <section className="mx-auto min-h-screen max-w-6xl">
      <section className="md:flex md:gap-3 md:p-3">
        <section className="flex flex-col gap-3.5 md:flex-2/3">
          <NavPost></NavPost>
          <PostForm></PostForm>
        </section>
        <section className="flex w-full flex-col justify-evenly">
          <PostMessage />
        </section>
      </section>
    </section>
  );
}
