import Tags from "./Tags";
const tags = [
  { icon: "Icons/like.svg", text: "Code of conduct", href: "#", alt: "like" },
  {
    icon: "Icons/privacy.svg",
    text: "Privacy Policy",
    href: "#",
    alt: "privacy",
  },
  {
    icon: "Icons/termsUse.svg",
    text: "Terms of use",
    href: "#",
    alt: "termsOfUse",
  },
];
export default function OtherCard() {
  return (
    <nav>
      <h3 className="p-4 font-sans text-base font-bold">Other</h3>
      <Tags tags={tags}></Tags>
    </nav>
  );
}
