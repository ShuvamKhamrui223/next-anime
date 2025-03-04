// internal imports
import Image from "next/image";
import { FC } from "react";

// types import
import { Daum } from "@/types/topAnime";

// local type declaration
type TTrendingCard = {
  cardContent: Daum;
};

const TrendingCard: FC<TTrendingCard> = async ({ cardContent }) => {
  // const user = await currentUser();

  return (
    <li className="snap-center basis-36 list-none flex flex-col gap-2 flex-shrink-0 p-2">
      <div className="relative h-[200px] w-full">
        <Image
          src={cardContent.images.webp.image_url}
          alt="trending movies"
          fill
          className="object-cover rounded-xl"
          loading="lazy"
        />
      </div>
      <div className="w-full">
        <div className="flex gap-2">
          <h4 className="text-gray-400 text-xs">2022</h4>
          <h4 className="uppercase text-xs text-gray-400">movie</h4>
        </div>
        <h3 className="text-gray-300 text-sm capitalize font-semibold">
          {cardContent.title.length > 30
            ? cardContent.title.slice(0, 30)
            : cardContent.title}
        </h3>
      </div>
    </li>
  );
};

export default TrendingCard;
