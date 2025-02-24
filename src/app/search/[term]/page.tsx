import SearchResultCard from "@/components/ui/SearchResultCard";
import { getSearchedAnime } from "@/utils/dataFetching";
import { notFound } from "next/navigation";

export default async function SearchPage({
  params,
}: {
  params: Promise<{ term: string }>;
}) {
  // preventing user from visiting search result page with empty string
  const { term } = await params;
  if (!term) notFound();

  // declataring the search term
  const searchTerm = decodeURI(term);

  const searchResults = await getSearchedAnime(searchTerm);
  return (
    <div>
      <h2 className="first-letter:uppercase mb-4">searched for {searchTerm}</h2>
      <ul className="flex flex-col gap-6">
        {searchResults.data.map((result, index) => (
          <SearchResultCard
            result={result}
            key={result.mal_id.toString() + index}
          />
        ))}
      </ul>
    </div>
  );
}
