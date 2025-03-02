import TrendingCard from "@/components/Cards/TrendingCard";
import { getTopAnimeSeries } from "@/utils/dataFetching";
import { FC } from "react";

type Props = {
  searchParams: Promise<{
    page?: number;
  }>;
};
const TvShowsPage: FC<Props> = async () => {
  const allShows = await getTopAnimeSeries();
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 : gap-4 md:gap-8">
      {allShows.map((show, index) => (
        <TrendingCard cardContent={show} key={show.mal_id + index} />
      ))}
    </div>
  );
};

export default TvShowsPage;
