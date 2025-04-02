import Tags from "./Tags";
const tags = [
  { icon: "Icons/like.svg", text: "Code of conduct", href: "#" },
  { icon: "Icons/privacy.svg", text: "Privacy Policy", href: "#" },
  { icon: "Icons/termsUse.svg", text: "Terms of use", href: "#" },
];
export default function OtherCard() {
  return (
    <nav>
      <h3 className="p-4 font-sans text-base font-bold">Other</h3>
      <Tags tags={tags}></Tags>
    </nav>
  );
}
