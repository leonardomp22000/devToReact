import Tags from "./Tags";
const tags = [
  { icon: "", text: "#webdev", href: "#", alt: "tag1" },
  { icon: "", text: "#programming", href: "#", alt: "tag2" },
  { icon: "", text: "#javascript", href: "#", alt: "tag3" },
  { icon: "", text: "#beginners", href: "#", alt: "tag4" },
  { icon: "", text: "#ai", href: "#", alt: "tag5" },
  { icon: "", text: "#tutorial", href: "#", alt: "tag6" },
  { icon: "", text: "#react", href: "#", alt: "tag7" },
  { icon: "", text: "#devops", href: "#", alt: "tag8" },
  { icon: "", text: "#python", href: "#", alt: "tag9" },
  { icon: "", text: "#productivity", href: "#", alt: "tag10" },
  { icon: "", text: "#aws", href: "#", alt: "tag11" },
  { icon: "", text: "#opensource", href: "#", alt: "tag12" },
  { icon: "", text: "#discuss", href: "#", alt: "tag13" },
  { icon: "", text: "#career", href: "#", alt: "tag14" },
  { icon: "", text: "#news", href: "#", alt: "tag15" },
  { icon: "", text: "#api", href: "#", alt: "tag16" },
  { icon: "", text: "#machinelearning", href: "#", alt: "tag17" },
  { icon: "", text: "#learning", href: "#", alt: "tag18" },
  { icon: "", text: "#node", href: "#", alt: "tag19" },
  { icon: "", text: "#typescript", href: "#", alt: "tag20" },
  { icon: "", text: "#java", href: "#", alt: "tag21" },
  { icon: "", text: "#cloud", href: "#", alt: "tag22" },
  { icon: "", text: "#datasience", href: "#", alt: "tag23" },
  { icon: "", text: "#css", href: "#", alt: "tag24" },
  { icon: "", text: "#security", href: "#", alt: "tag25" },
  { icon: "", text: "#watercooler", href: "#", alt: "tag26" },
  { icon: "", text: "#testing", href: "#", alt: "tag27" },
  { icon: "", text: "#go", href: "#", alt: "tag28" },
  { icon: "", text: "#frontend", href: "#", alt: "tag29" },
  { icon: "", text: "#linux", href: "#", alt: "tag30" },
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
