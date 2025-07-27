import Rate from "@/components/Rate";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: any) {
  return {
    title: `Movie ${params.id}`,
  };
}

export default async function page({ params, searchParams }: any) {
  const id = params.id;
  const querytype = searchParams?.querytype;

  const res = await fetch(
    `https://api.themoviedb.org/3/${querytype}/${id}?api_key=${process.env.TMDB_API_KEY}`
  );

  if (!res.ok) return notFound();

  const movie = await res.json();
  const session = await getServerSession(authOptions);

  return (
    <div className="w-full max-w-5xl mx-auto px-0 sm:px-6">
      <div className="flex flex-col md:flex-row gap-6 bg-gray-900/80 backdrop-blur-md shadow-xl border border-white/20 rounded-xl p-4 sm:p-6">
        <div className="w-full md:w-1/3">
          <Image
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                : "/noPoster.png"
            }
            alt="movie"
            width={300}
            height={450}
            className="rounded-lg w-full object-cover"
          />
        </div>

        <div className="flex-1 text-white space-y-4">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <div className="flex flex-col gap-3">
              <h1 className="text-2xl sm:text-3xl font-bold">
                {movie.name || movie.title}
              </h1>
              <p className="text-sm text-gray-400 italic">{movie.tagline}</p>
              <div className="flex gap-2 flex-wrap">
                {movie.genres?.map((genre: { id: number; name: string }) => (
                  <span
                    key={genre.id}
                    className="bg-gradient-to-br from-indigo-900 via-violet-800 to-purple-700 text-white text-xs px-2 py-1 rounded-full"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>

            {session && (
              <div className="self-start sm:self-center sm:px-4">
                <Rate
                  movieId={movie.id}
                  movieTitle={movie.title}
                  posterPath={movie.poster_path}
                />
              </div>
            )}
          </div>

          <p className="text-base">{movie.overview}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-300">
            <div>
              <strong>Release Date:</strong> {movie.release_date}
            </div>
            <div>
              <strong>Runtime:</strong> {movie.runtime} min
            </div>
            <div>
              <strong>Rating:</strong> {movie.vote_average} / 10 (
              {movie.vote_count} votes)
            </div>
            <div>
              <strong>Language:</strong>{" "}
              {movie.spoken_languages?.[0]?.english_name}
            </div>
          </div>

          {movie.homepage && (
            <Link
              href={movie.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-sm text-purple-400 hover:underline"
            >
              Visit Official Site
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
