import Button from "./Button";
import Image from "next/image";
const socialMedia = [
  { src: "/Icons/x.svg", href: "#", alt: "x" },
  { src: "/Icons/facebook.svg", href: "#", alt: "facebook" },
  { src: "/Icons/gitHub.svg", href: "#", alt: "github" },
  { src: "/Icons/instagram.svg", href: "#", alt: "instagram" },
  { src: "/Icons/twiter.svg", href: "#", alt: "twiter" },
  { src: "/Icons/m.svg", href: "#", alt: "m" },
  { src: "/Icons/butterfly.svg", href: "#", alt: "butterfly" },
];
export default function SocialMedia() {
  return (
    <section>
      {socialMedia.map((network) => {
        return (
          <Button key={network.alt} variant="text">
            <Image
              src={network.src}
              alt={network.alt}
              width={25}
              height={25}
            ></Image>
          </Button>
        );
      })}
    </section>
  );
}
