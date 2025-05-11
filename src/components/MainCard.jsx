import CardBase from "./CardBase";
import { EllipsisHorizontalIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Button from "./Button";
import Image from "next/image";
import Post from "./Post";
export default function () {
  return (
    <section>
      <CardBase>
        <div className="flex items-center justify-between">
          <span className="font-sans text-sm text-black/70">
            👋 DEV Challenges{" "}
          </span>
          <span>
            <Button className="!p-1" variant="text">
              {" "}
              <EllipsisHorizontalIcon width={20} height={20} />
            </Button>
            <Button className="!p-1" variant="text">
              {" "}
              <XMarkIcon width={20} height={20} />
            </Button>
          </span>
        </div>
        <div className="md:p-4">
          <Image
            className="rounded-lg"
            width={800}
            height={150}
            src={
              "https://media2.dev.to/dynamic/image/width=775%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fwkz8yrhhodumbj7pnfwv.png"
            }
          ></Image>
          <h3 className="m-4 ml-0 font-sans text-xl font-bold">
            {" "}
            Get creative with Pulumi and GitHub!
          </h3>
          <div className="rounded-xl border border-black/10 p-4">
            <Post
              creationDate={"Apr 3"}
              userPicture={
                "https://media2.dev.to/dynamic/image/quality=100/https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
              }
              userName={"Jeongho Nam"}
              mainText={
                "Announcing the Pulumi Deploy and Document Challenge: $3,000 in Prizes!"
              }
            ></Post>
          </div>
        </div>
      </CardBase>
    </section>
  );
}
