import Image from "next/image";
import Button from "./Button";
export default function ActionBarPost() {
  const actions = [
    "/Icons/bold.svg",
    "/Icons/italic.svg",
    "/Icons/attach.svg",
    "/Icons/numberList.svg",
    "/Icons/list.svg",
    "/Icons/heading.svg",
    "/Icons/quote.svg",
    "/Icons/code.svg",
    "/Icons/codeBlock.svg",
    "/Icons/embed.svg",
    "/Icons/uploadImage.svg",
    "/Icons/menu.svg",
  ];
  return (
    <section className="mx-auto">
      {actions.map((action) => {
        return (
          <Button key={action} className="!p-2.5" variant="text">
            <Image width={20} height={20} alt={action} src={action}></Image>
          </Button>
        );
      })}
    </section>
  );
}
