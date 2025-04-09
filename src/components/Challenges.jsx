import CardBase from "./CardBase";
import ChallengeCard from "./ChallengeCard";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
const challenges = [
  {
    status: "Just Launched 🚀",
    image:
      "https://media2.dev.to/dynamic/image/width=880%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Ftdu7wtkzz67tqpzexnv1.png",
    title: "Alibaba Cloud Web Game Challenge",
  },
  {
    status: "Happening Now ✨",
    image:
      "https://media2.dev.to/dynamic/image/width=880%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fwkz8yrhhodumbj7pnfwv.png",
    title: "Pulumi Deploy and Document Challenge",
    description: "$3,000 prize pool!",
  },
  {
    status: "Celebrate With Us 💜",
    image:
      "https://media2.dev.to/dynamic/image/width=880%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fi7uzu7m51rl9yhs2yryr.png",
    title: "WeCoded Challenge",
    description: "Build a landing page or share your story!",
  },
];
export default function Challenges() {
  return (
    <section className="h-[500px] overflow-y-auto">
      <CardBase className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <p className="font-sans text-sm text-black/70">
            👋 Whats happening this week
          </p>
          <EllipsisHorizontalIcon height={25} width={25} />
        </div>
        <h2 className="font-sans text-xl font-bold text-black/75">
          Challenges 🤗
        </h2>
        {challenges.map((challenge, index) => {
          return (
            <ChallengeCard
              key={challenge.title - index}
              status={challenge.status}
              image={challenge.image}
              title={challenge.title}
              description={challenge.description}
            ></ChallengeCard>
          );
        })}

        <p className="font-sans text-base font-bold">Have a great week ❤️</p>
      </CardBase>
    </section>
  );
}
