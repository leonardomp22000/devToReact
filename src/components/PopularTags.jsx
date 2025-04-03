import Tags from "./Tags";
const tags = [
  { icon: "", text: "#webdev", href: "#" },
  { icon: "", text: "#programming", href: "#" },
  { icon: "", text: "#javascript", href: "#" },
  { icon: "", text: "#beginners", href: "#" },
  { icon: "", text: "#ai", href: "#" },
  { icon: "", text: "#tutorial", href: "#" },
  { icon: "", text: "#react", href: "#" },
  { icon: "", text: "#devops", href: "#" },
  { icon: "", text: "#python", href: "#" },
  { icon: "", text: "#productivity", href: "#" },
  { icon: "", text: "#aws", href: "#" },
  { icon: "", text: "#opensource", href: "#" },
  { icon: "", text: "#discuss", href: "#" },
  { icon: "", text: "#career", href: "#" },
  { icon: "", text: "#news", href: "#" },
  { icon: "", text: "#api", href: "#" },
  { icon: "", text: "#machinelearning", href: "#" },
  { icon: "", text: "#learning", href: "#" },
  { icon: "", text: "#node", href: "#" },
  { icon: "", text: "#typescript", href: "#" },
  { icon: "", text: "#java", href: "#" },
  { icon: "", text: "#cloud", href: "#" },
  { icon: "", text: "#datasience", href: "#" },
  { icon: "", text: "#css", href: "#" },
  { icon: "", text: "#security", href: "#" },
  { icon: "", text: "#watercooler", href: "#" },
  { icon: "", text: "#testing", href: "#" },
  { icon: "", text: "#go", href: "#" },
  { icon: "", text: "#frontend", href: "#" },
  { icon: "", text: "#linux", href: "#" },
];
export default function PopularTags() {
  return (
    <section>
      <h3 className="p-4 font-sans text-base font-bold">Popular Tags</h3>
      <div className="h-64 overflow-x-scroll pl-2">
        <Tags isIcon={false} tags={tags}></Tags>
      </div>
    </section>
  );
}
