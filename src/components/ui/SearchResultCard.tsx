import { Result } from "@/types/searchedAnime";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type Props = {
  result: Result;
};

const SearchResultCard: FC<Props> = ({ result }) => {
  return (
    <li className=" snap-center flex items-start gap-2">
      <Image
        src={result.images.webp.image_url}
        alt={result.title_english || result.title}
        width={500}
        height={45}
        loading="lazy"
        className="rounded-2xl aspect-video object-cover"
      />
      <div className=" px-3 py-2 flex flex-col items-start">
        <div className="flex gap-2">
          <h4 className="text-gray-300 text-base">{result.year}</h4>
          <h4 className="uppercase">{result.type}</h4>
        </div>
        <h3 className="text-gray-300 text-2xl capitalize font-medium">
          {result.title_english || result.title}
        </h3>
        <div className="flex gap-2">
          <p className="">{result.duration}</p>
          <p className="">
            {result?.episodes && "total episodes " + result.episodes}
          </p>
        </div>
        <div className="space-x-2">
          {result.genres.map((genre) => (
            <Link
              href={`/genre/${genre.name.toLowerCase()}`}
              key={genre.mal_id}
            >
              {genre.name}
            </Link>
          ))}
        </div>
      </div>
    </li>
  );
};

export default SearchResultCard;
