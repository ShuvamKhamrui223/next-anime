import TrendingCard from "@/components/Cards/TrendingCard";
import { getTopAnimeMovies } from "@/utils/dataFetching";

const MoviesPage = async () => {
  const allMovies = await getTopAnimeMovies();
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 : gap-4 md:gap-8">
      {allMovies.map((movie, index) => (
        <TrendingCard cardContent={movie} key={movie.mal_id + index} />
      ))}
    </div>
  );
};

export default MoviesPage;
