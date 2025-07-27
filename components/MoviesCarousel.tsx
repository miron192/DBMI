import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import MovieCard from "./MovieCard";
import MovieItem from "@/lib/Interfaces";

const MoviesCarousel = ({
  movies,
  querytype,
}: {
  movies: MovieItem[];
  querytype: "tv" | "movie";
}) => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full mt-4"
    >
      <CarouselContent>
        {movies.map((movie: MovieItem) => (
          <CarouselItem key={movie.id} className="basis-1/8 max-w-42 h-72">
            <MovieCard
              id={movie.id}
              title={movie.title}
              poster_path={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                  : "/noPoster.png"
              }
              querytype={querytype}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default MoviesCarousel;
