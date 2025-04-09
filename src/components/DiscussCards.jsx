import CardBase from "./CardBase";
import DiscussCard from "./DiscussCard";
const topics = [
  {
    title: "5 Common Mistakes Beginners Make in CSS (And how to fix them)",
    isNew: true,
  },
  { title: "What was your win this week?", isNew: false },
  {
    title:
      "I built SubMan - a Laravel app to manage subscriptions with reminders and PDF export",
    isNew: true,
  },
  {
    title:
      "Why Learn Cloud/AWS? Provisioning AWS EC2s in VPC using Terraform with Hands-on Sample",
    isNew: false,
  },
  {
    title: "Struggling with nested configs and cluttered syntax?",
    isNew: true,
  },
];
export default function DiscussCards() {
  return (
    <section>
      <CardBase>
        <h2 className="font-sans text-xl font-bold text-black/75">#discuss</h2>
        <p className="font-sans text-xs text-black/60">
          Discussion threads targeting the whole community
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
