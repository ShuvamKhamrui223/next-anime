"use client";

import { addToWatchLater } from "@/actions/firebase";
import { BookmarkIcon, Loader } from "lucide-react";
import { FC } from "react";
import { useFormStatus } from "react-dom";

type Props = {
  contentID: string;
  userEmail?: string;
};

const WatchLaterButton: FC<Props> = ({ contentID, userEmail }) => {
  const { pending } = useFormStatus();

  return (
    <>
      <form
        action={async (formdata) => {
          const feror = await addToWatchLater(formdata);
          if (feror) console.log("fire base ", feror);
        }}
      >
        <button className="bg-gray-800 text-gray-400 hover:bg-gray-800/80 hover:text-gray-200 px-4 py-2 cursor-pointer capitalize">
          <input type="hidden" name="userEmail" value={userEmail} />
          <input type="hidden" name="contentId" value={contentID} />
          {!pending ? <BookmarkIcon /> : <Loader className="animate-spin" />}
        </button>
      </form>
    </>
  );
};

export default WatchLaterButton;
