import CardBase from "./CardBase";
import Image from "next/image";
export default function ChallengeCard({
  status = "",
  image = "",
  title = "",
  description = "",
}) {
  return (
    <section className="flex flex-col gap-1.5 rounded-xl border-2 border-black/50 p-4">
      <p className="font-sans text-base">{status}</p>
      <Image
        className="w-full rounded-md"
        src={image}
        width={250}
        height={200}
      />
      <h2 className="font-sans text-xl font-bold text-blue-700 underline">
        {title}
      </h2>

      <p className="font-sans text-base text-black/80 italic">{description}</p>
    </section>
  );
}
