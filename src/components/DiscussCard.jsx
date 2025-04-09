export default function DiscussCard({ title = "", isNew = false }) {
  return (
    <section className="my-3 flex flex-col gap-3">
      <p className="text-black/70 hover:text-blue-700">{title}</p>
      {isNew ? (
        <span className="h-fit w-fit rounded-md bg-yellow-300 p-1 text-xs">
          {" "}
          New
        </span>
      ) : (
        <span className="font-sans text-sm text-black/60">14 comments</span>
      )}

      <div className="border border-gray-50"></div>
    </section>
  );
}
