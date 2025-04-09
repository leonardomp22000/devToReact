import CardBase from "./CardBase";
import DiscussCard from "./DiscussCard";
const topics = [
  {
    title: "The Debugging Ghost of Line 42",
    isNew: true,
  },
  {
    title:
      "Why '10x Employees' Dont Actually Do Their Jobs (And Why Thats a Good Thing)",
    isNew: true,
  },
  {
    title: "The Psychology of Fonts in UI/UX #UXDesign #Design",
    isNew: true,
  },
  {
    title: "Cloud Server vs Serverless Instance",
    isNew: true,
  },
];
export default function WaterCoolerCards() {
  return (
    <section>
      <CardBase>
        <h2 className="font-sans text-xl font-bold text-black/75">
          #watercooler
        </h2>
        <p className="font-sans text-xs text-black/60">
          Light, and off-topic conversation.
        </p>
        {topics.map((topic, index) => {
          return (
            <DiscussCard
              key={topic.title - index}
              title={topic.title}
              isNew={topic.isNew}
            ></DiscussCard>
          );
        })}
      </CardBase>
    </section>
  );
}
