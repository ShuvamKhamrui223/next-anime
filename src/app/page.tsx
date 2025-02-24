import TrendingCard from "@/components/Cards/TrendingCard";
import {
  getTopAnimeMovies,
  getTopAnimeSeries,
  getUpcomingAnimeMovies,
  getUpcomingAnimeSeries,
} from "@/utils/dataFetching";

export default async function Home() {
  const topMovies = await getTopAnimeMovies();
  const topSeries = await getTopAnimeSeries();
  const upcomingSeries = await getUpcomingAnimeSeries();
  const upcomingMovies = await getUpcomingAnimeMovies();

  return (
    <div className="space-y-6">
      {/* top */}
      <h2 className="text-3xl capitalize my-3 text-gray-200">
        trending movies
      </h2>
      <div className="flex items-center gap-4 overflow-x-auto snap-x ">
        {topMovies?.slice(0, 10)?.map((anime, index) => (
          <TrendingCard
            cardContent={anime}
            key={`${anime.mal_id.toString() + index}`}
          />
        ))}
      </div>
      <h2 className="text-3xl capitalize my-3 text-gray-200">
        trending series
      </h2>
      <div className="flex items-center gap-4 overflow-x-auto snap-x ">
        {topSeries?.slice(0, 10)?.map((anime, index) => (
          <TrendingCard
            cardContent={anime}
            key={`${anime.mal_id.toString() + index}`}
          />
        ))}
      </div>

      {/* upcoming */}

      <h2 className="text-3xl capitalize my-3 text-gray-200">
        upcoming movies
      </h2>
      <div className="flex items-center gap-4 overflow-x-auto snap-x ">
        {upcomingMovies?.slice(0, 10)?.map((anime, index) => (
          <TrendingCard
            cardContent={anime}
            key={anime.mal_id.toString() + index}
          />
        ))}
      </div>

      <h2 className="text-3xl capitalize my-3 text-gray-200">
        upcoming series
      </h2>
      <div className="flex items-center gap-4 overflow-x-auto snap-x ">
        {upcomingSeries?.slice(0, 10)?.map((anime, index) => (
          <TrendingCard
            cardContent={anime}
            key={anime.mal_id.toString() + index}
          />
        ))}
      </div>
    </div>
  );
}
