import CardBase from "./CardBase";
import Image from "next/image";
import Button from "./Button";
import { ChatBubbleLeftIcon, BookmarkIcon } from "@heroicons/react/24/outline";
export default function Post({
  creationDate,
  userPicture,
  userName,
  mainText,
}) {
  return (
    <CardBase>
      <div className="flex items-center gap-2">
        <Image
          src={userPicture}
          width={30}
          height={30}
          className="h-8 w-8 rounded-full"
        ></Image>
        <div className="flex flex-col">
          <span className="font-sans text-sm text-black/80">{userName}</span>
          <span className="font-sans text-xs text-black/60">
            {creationDate}
          </span>
        </div>
      </div>
      <div className="font-sans text-2xl font-bold hover:text-blue-700">
        {mainText}
      </div>
      <div className="flex">
        <Button className="text-sm text-black/80" variant="text">
          #typescript
        </Button>
        <Button className="text-sm text-black/80" variant="text">
          #programming
        </Button>
        <Button className="text-sm text-black/80" variant="text">
          #ai
        </Button>
        <Button className="text-sm text-black/80" variant="text">
          #opensource
        </Button>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Button className="text-sm" variant="text">
            56 reactions{" "}
          </Button>
          <Button variant="text" className="text-sm">
            <div className="flex items-center gap-2">
              <ChatBubbleLeftIcon width={15} height={15} />
              Comments
            </div>
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-sans text-xs text-black/70">23 min read</span>

          <Button variant="text">
            {" "}
            <BookmarkIcon width={15} height={15} />
          </Button>
        </div>
      </div>
    </CardBase>
  );
}
