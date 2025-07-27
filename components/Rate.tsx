"use client";
import { useEffect, useState } from "react";

const Rate = ({
  movieId,
  movieTitle,
  posterPath,
}: {
  movieId: string;
  movieTitle: string;
  posterPath: string;
}) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 👇 Fetch existing rating
  useEffect(() => {
    const fetchRating = async () => {
      try {
        const res = await fetch(`/api/rating?movieId=${movieId}`, {
          credentials: "include",
        });
        const data = await res.json();
        if (data.rating) setRating(data.rating);
      } catch (err) {
        console.error("Failed to fetch rating", err);
      }
    };

    fetchRating();
  }, [movieId]);

  const saveRating = async (score: number) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/rating", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ movieId, movieTitle, score, posterPath }),
        credentials: "include",
      });

      if (!res.ok) throw new Error("Failed to save rating");
      setRating(score);
    } catch (e: any) {
      setError(e.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;

        return (
          <button
            key={index}
            type="button"
            onClick={() => saveRating(starValue)}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(0)}
            className="focus:outline-none hover:cursor-pointer"
            disabled={loading}
          >
            <span
              className={`text-2xl transition ${
                starValue <= (hover || rating)
                  ? "text-yellow-400"
                  : "text-gray-400"
              }`}
            >
              ★
            </span>
          </button>
        );
      })}
      {loading && <span className="ml-2 text-sm text-gray-500">Saving...</span>}
      {error && <span className="ml-2 text-sm text-red-500">{error}</span>}
      {rating > 0 && !loading && (
        <span className="ml-2 text-sm text-gray-300">{rating} / 5</span>
      )}
    </div>
  );
};

export default Rate;
