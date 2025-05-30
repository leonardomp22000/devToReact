import Tags from "./Tags";
const tags = [
  { icon: "Icons/home.svg", text: "Home", href: "#", alt: "home" },
  { icon: "Icons/dev++.svg", text: "DEV++", href: "#", alt: "dev++" },
  { icon: "Icons/podcast.svg", text: "Podcast", href: "#", alt: "podcast" },
  { icon: "Icons/videos.svg", text: "Videos", href: "#", alt: "videos" },
  { icon: "Icons/tags.svg", text: "Tags", href: "#", alt: "tags" },
  { icon: "Icons/help.svg", text: "DEV Help", href: "#", alt: "help" },
  { icon: "Icons/shop.svg", text: "Forem Shop", href: "#", alt: "shop" },
  {
    icon: "Icons/advertise.svg",
    text: "Advertise on DEV",
    href: "#",
    alt: "advertise",
  },
  {
    icon: "Icons/challenges.svg",
    text: "DEV Challenges",
    href: "#",
    alt: "challenges",
  },
  {
    icon: "Icons/showcase.svg",
    text: "DEV Showcase",
    href: "#",
    alt: "showcase",
  },
  { icon: "Icons/about.svg", text: "About", href: "#", alt: "about" },
  { icon: "Icons/contact.svg", text: "Contact", href: "#", alt: "contact" },
  {
    icon: "Icons/postgress.svg",
    text: "Free Postgres Database",
    href: "#",
    alt: "postgress",
  },
  {
    icon: "Icons/comparisions.svg",
    text: "Software comparisons",
    href: "#",
    alt: "comparisions",
  },
];
export default function Categories() {
  return (
    <section>
      <Tags tags={tags}></Tags>
    </section>
  );
}
