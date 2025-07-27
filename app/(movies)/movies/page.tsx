import {
  GetLatestMovies,
  GetLatestShows,
  GetPopularMovies,
  GetPopularShows,
} from "@/lib/utils";
import MovieItem from "@/lib/Interfaces";
import MoviesCarousel from "@/components/MoviesCarousel";

const Movie = async () => {
  const movies: MovieItem[] = await GetLatestMovies();
  const shows: MovieItem[] = await GetLatestShows();
  const popularShows: MovieItem[] = await GetPopularShows();
  const popularMovies: MovieItem[] = await GetPopularMovies();

  return (
    <div className="">
      <h3 className="text-xl ">Latest Movies:</h3>

      <MoviesCarousel movies={movies} querytype="movie" />
      <h3 className="text-xl ">Latest Shows:</h3>
      <MoviesCarousel movies={shows} querytype="tv" />
      <h3 className="text-xl ">Popular shows now:</h3>
      <MoviesCarousel movies={popularShows} querytype="tv" />
      <h3 className="text-xl ">Popular movies now:</h3>
      <MoviesCarousel movies={popularMovies} querytype="movie" />
    </div>
  );
};

export default Movie;
