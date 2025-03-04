import { Result } from "@/types/searchedAnime";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type Props = {
  result: Result;
};

const SearchResultCard: FC<Props> = ({ result }) => {
  return (
    <li className=" snap-center flex items-start flex-col md:flex-row gap-4 bg-gradient-to-t from-transparent to-gray-800 md:bg-gradient-to-l  p-4 rounded-2xl">
      <Image
        src={result.images.webp.image_url}
        alt={result.title_english || result.title}
        width={500}
        height={45}
        loading="lazy"
        className="rounded-2xl aspect-video object-cover"
      />
      <div className="py-2 flex flex-col items-start">
        <h4 className="uppercase text-xs text-gray-400">{result.type}</h4>
        <h3 className="text-gray-300 text-xl capitalize font-medium">
          {result.title_english || result.title}
        </h3>
        <div className="flex gap-2 my-2 ">
          <p className="text-xs text-gray-400">{result.duration}</p>
          <p className="text-xs text-gray-400">
            {result?.episodes && "total episodes " + result.episodes}
          </p>
        </div>
        <div className="space-x-2">
          {result.genres.map((genre) => (
            <Link
              href={`/genre/${genre.name.toLowerCase()}`}
              key={genre.mal_id}
              className="text-xs text-emerald-500"
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
