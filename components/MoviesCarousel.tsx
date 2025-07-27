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
          <CarouselItem
            key={movie.id}
            className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6 xl:basis-1/8 max-w-[140px] h-64"
          >
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
