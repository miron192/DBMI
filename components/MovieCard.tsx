import MovieItem from "@/lib/Interfaces";
import Image from "next/image";
import Link from "next/link";
interface MovieCardProps extends MovieItem {
  querytype: "tv" | "movie"; // <-- adăugăm aici
}

const MovieCard = ({ poster_path, title, id, querytype }: MovieCardProps) => (
  <Link href={`/movies/${id}?querytype=${querytype}`} className="">
    <div className="relative h-64 overflow-hidden rounded-md">
      <Image src={poster_path} fill alt="movie" className="" />{" "}
    </div>
  </Link>
);

export default MovieCard;
