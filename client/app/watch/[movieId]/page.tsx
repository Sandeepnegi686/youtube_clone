import API_BASE_URL from "@/lib/api";
import { MovieType } from "@/types/MovieType";
import { cookies } from "next/headers";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";

async function Page({ params }: { params: Promise<{ movieId: string }> }) {
  const { movieId } = await params;
  if (!movieId) {
    return (
      <div className="text-center text-white text-3xl">Unknown movie ID</div>
    );
  }
  const cookieStore = cookies();
  const cookie = (await cookieStore).get("access-token");
  const response = await fetch(
    `${API_BASE_URL}/api/v1/movies/getMovieById/${movieId}`,
    {
      headers: {
        Cookie: `access-token=${cookie?.value}`,
      },
      cache: "no-store",
    },
  );

  if (!response.ok) {
    return (
      <div className="text-center text-white text-3xl">Unknown movie ID</div>
    );
  }

  const json = await response.json();

  if (!json.s) {
    return (
      <div className="text-center text-white text-3xl">Unknown movie ID</div>
    );
  }
  const movie: MovieType = json.d;

  return (
    <div className="h-screen w-screen">
      <nav className="fixed w-full p-4 z-10 flex items-center gap-8 bg-black brightness-70">
        <Link href="/" className="ml-4">
          <AiOutlineArrowLeft className="text-white" size={30} />
        </Link>
        <p className="text-white text-xl md:text-3xl font-bold">
          <span className="font-light">Watching: </span>
          {movie?.title}
        </p>
      </nav>
      <video
        autoPlay
        controls
        className="h-full w-full"
        src={movie.videoUrl}
        poster={movie.thumbnailUrl}
      ></video>
    </div>
  );
}

export default Page;
