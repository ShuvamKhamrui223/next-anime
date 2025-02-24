// internal imports
import Image from "next/image";
import { FC } from "react";

// types import
import { Daum } from "@/types/topAnime";

// local type declaration
type TTrendingCard = {
  cardContent: Daum;
};

const TrendingCard: FC<TTrendingCard> = ({ cardContent }) => {
  return (
    <li className="rounded-2xl overflow-hidden snap-center h-52 basis-40 flex-shrink-0 relative">
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
    </li>
  );
};

export default TrendingCard;
