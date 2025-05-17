import CardBase from "./CardBase";
import Image from "next/image";
import Button from "./Button";
import {
  ChatBubbleLeftIcon,
  BookmarkIcon,
  XMarkIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";

export default function Post({
  creationDate,
  userPicture,
  userName,
  mainText,
  body,
  postID,
  onDelete,
}) {
  const handleClose = () => {
    onDelete(postID);
    return;
  };
  const handleEdit = () => {
    console.log("EDIT");
    return;
  };
  return (
    <CardBase className="md:p-4">
      <div className="flex justify-between">
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
        <div className="flex gap-1">
          <Button
            className="!p-1.5"
            onClick={handleEdit}
            type="button"
            variant="text"
          >
            <PencilSquareIcon width={20} height={20} />
          </Button>
          <Button
            className="!p-1.5"
            onClick={handleClose}
            type="button"
            variant="text"
          >
            <XMarkIcon width={20} height={20} />
          </Button>
        </div>
      </div>
      <div className="font-sans text-xl font-bold hover:text-blue-700 md:text-2xl">
        {mainText}
      </div>
      <div className="text-lg text-black/90">{body}</div>
      <div className="flex flex-wrap">
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
          <Button className="hidden text-sm md:block" variant="text">
            56 reactions{" "}
          </Button>
          <Button variant="text" className="text-sm">
            <div className="hidden items-center gap-2 md:flex">
              <ChatBubbleLeftIcon width={15} height={15} />
              Comments
            </div>
            <div className="items-center gap-2 md:hidden">
              <ChatBubbleLeftIcon width={15} height={15} />
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
