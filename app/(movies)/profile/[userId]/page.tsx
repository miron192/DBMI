import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import prisma from "@/lib/prisma";
import MovieItem from "@/lib/Interfaces";
import MovieCard from "@/components/MovieCard";
import MoviesCarousel from "@/components/MoviesCarousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default async function MyRatingsPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) return <p>Unauthorized</p>;

  const ratings = await prisma.rating.findMany({
    where: { userId: session.user.id },
    include: { movie: true },
  });

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">My Ratings</h1>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full mt-4"
      >
        <CarouselContent>
          {ratings.map((rating) => (
            <CarouselItem
              key={rating.id}
              className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6 xl:basis-1/8 max-w-[140px] h-64"
            >
              <MovieCard
                poster_path={
                  rating.movie.posterPath
                    ? `https://image.tmdb.org/t/p/w200${rating.movie.posterPath}`
                    : "/noPoster.png"
                }
                title={rating.movie.title || rating.movie.name || "Untitled"}
                id=""
                querytype="movie"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
