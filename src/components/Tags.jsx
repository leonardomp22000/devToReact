import Tag from "./Tag";
const tags = [
  { icon: "Icons/home.svg", text: "Home", href: "#" },
  { icon: "Icons/dev++.svg", text: "DEV++", href: "#" },
  { icon: "Icons/podcast.svg", text: "Podcast", href: "#" },
  { icon: "Icons/videos.svg", text: "Videos", href: "#" },
  { icon: "Icons/tags.svg", text: "Tags", href: "#" },
  { icon: "Icons/help.svg", text: "DEV Help", href: "#" },
  { icon: "Icons/shop.svg", text: "Forem Shop", href: "#" },
  { icon: "Icons/advertise.svg", text: "Advertise on DEV", href: "#" },
  { icon: "Icons/challenges.svg", text: "DEV Challenges", href: "#" },
  { icon: "Icons/showcase.svg", text: "DEV Showcase", href: "#" },
  { icon: "Icons/about.svg", text: "About", href: "#" },
  { icon: "Icons/contact.svg", text: "Contact", href: "#" },
  { icon: "Icons/postgress.svg", text: "Free Postgres Database", href: "#" },
  { icon: "Icons/comparisions.svg", text: "Software comparisons", href: "#" },
];
export default function Categories() {
  return (
    <section>
      {tags.map((category, index) => {
        return (
          <Tag
            key={category - index}
            icon={category.icon}
            text={category.text}
          ></Tag>
        );
      })}
    </section>
  );
}
