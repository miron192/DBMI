import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/authOptions";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { movieId, title, name, score, posterPath } = await req.json();
    const movieIdStr = String(movieId);

    if (!movieId || typeof score !== "number") {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    const movieTitle = title || name || "Unknown";

    await prisma.movie.upsert({
      where: { id: movieIdStr },
      update: {
        title: movieTitle,
        posterPath: posterPath ?? "",
      },
      create: {
        id: movieIdStr,
        title: movieTitle,
        posterPath: posterPath ?? "",
      },
    });

    console.log("Movie upserted");

    const rating = await prisma.rating.upsert({
      where: {
        userId_movieId: {
          userId: session.user.id,
          movieId: movieIdStr,
        },
      },
      update: { score },
      create: {
        userId: session.user.id,
        movieId: movieIdStr,
        score,
      },
    });

    return NextResponse.json(rating);
  } catch (error) {
    console.error("Error in POST /api/rating:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    const { searchParams } = new URL(req.url);
    const movieId = searchParams.get("movieId");

    if (!session?.user?.id || !movieId) {
      return NextResponse.json({ rating: null });
    }

    const existing = await prisma.rating.findUnique({
      where: {
        userId_movieId: {
          userId: session.user.id,
          movieId: String(movieId),
        },
      },
    });

    return NextResponse.json({ rating: existing?.score || null });
  } catch (error) {
    console.error("Error in GET /api/rating:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
