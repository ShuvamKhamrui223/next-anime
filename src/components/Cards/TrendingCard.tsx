// internal imports
import Image from "next/image";
import { FC } from "react";

// types import
import { Daum } from "@/types/topAnime";
import { CheckIcon } from "lucide-react";
import { currentUser } from "@clerk/nextjs/server";

// server actions

import WatchLaterButton from "../Buttons/WatchLaterButton";

// local type declaration
type TTrendingCard = {
  cardContent: Daum;
};

const TrendingCard: FC<TTrendingCard> = async ({ cardContent }) => {
  const user = await currentUser();

  return (
    <li className="rounded-2xl overflow-hidden snap-center basis-40 list-none flex-shrink-0 ">
      <div className="relative h-52 flex-shrink-0">
        <Image
          src={cardContent.images.webp.image_url}
          alt="trending movies"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
        />
        <div className="z-10 absolute bottom-0 left-0 w-full bg-gradient-to-t to-transparent from-gray-950 px-3 py-2">
          <div className="flex gap-2">
            <h4 className="text-gray-300 text-base">2022</h4>
            <h4 className="uppercase">movie</h4>
          </div>
          <h3 className="text-gray-300 text-xl capitalize font-medium">
            {cardContent.title}
          </h3>
        </div>
      </div>
      <div className="flex items-center w-full divide-x divide-gray-700">
        <WatchLaterButton
          contentID={cardContent.mal_id.toString()}
          userEmail={
            user?.primaryEmailAddress?.emailAddress !== undefined
              ? user?.primaryEmailAddress?.emailAddress
              : user?.id
          }
        />
        <button className="px-4 py-2 cursor-pointer bg-gray-800">
          <CheckIcon />
        </button>
      </div>
    </li>
  );
};

export default TrendingCard;
