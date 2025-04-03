import Button from "./Button";
import Image from "next/image";
const socialMedia = [
  "/Icons/x.svg",
  "/Icons/facebook.svg",
  "/Icons/gitHub.svg",
  "/Icons/instagram.svg",
  "/Icons/twiter.svg",
  "/Icons/m.svg",
  "/Icons/butterfly.svg",
];
export default function SocialMedia() {
  return (
    <section>
      {socialMedia.map((network, index) => {
        return (
          <Button key={network - index} variant="text">
            <Image src={network} width={20} height={30}></Image>
          </Button>
        );
      })}
    </section>
  );
}
