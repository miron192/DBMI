import MoviesCarousel from "@/components/MoviesCarousel";
import { SearchMovies, SearchShows } from "@/lib/utils";
import { notFound } from "next/navigation";

interface Params {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}
const SearchPage = async ({ searchParams }: Params) => {
  const query = Array.isArray(searchParams.query)
    ? searchParams.query[0]
    : searchParams.query || " ";

  let movies = await SearchMovies(query);
  let shows = await SearchShows(query);
  if (movies.length === 0 && shows.length === 0) return notFound();
  return (
    <div>
      {movies && movies.length > 0 ? (
        <>
          <h3 className="text-xl ">Latest Movies:</h3>
          <MoviesCarousel movies={movies} querytype="movie" />
        </>
      ) : (
        <p>No movies found</p>
      )}

      {}
      {shows && shows.length > 0 ? (
        <>
          <h3 className="text-xl ">Latest Shows:</h3>
          <MoviesCarousel movies={shows} querytype="tv" />
        </>
      ) : (
        <p>No shows found</p>
      )}
    </div>
  );
};

export default SearchPage;
