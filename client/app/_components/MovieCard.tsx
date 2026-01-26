import { MovieType } from "@/types/MovieType";
import Image from "next/image";
import { BsFillPlayFill } from "react-icons/bs";
import FavoriteButton from "./FavoriteButton";

function MovieCard({ movie }: { movie: MovieType }) {
  return (
    <div className="group col-span relative h-[12vw]">
      {/* {movie.title} */}
      <div className="relative w-full h-[12vw] cursor-pointer group-hover:opacity-90 sm:group-hover:opacity-0 transition duration shadow-xl rounded-md delay-300">
        <Image
          src={movie.thumbnailUrl}
          alt="Thumbnail"
          fill
          objectFit="cover"
        />
      </div>
      <div className="opacity-0 absolute top-0 transition duration-300 delay-300 z-10 invisible sm:visible w-full scale-0 group-hover:scale-110 group-hover:opacity-100">
        <div className="relative w-full h-[12vw] cursor-pointer transition duration-300 shadow-xl rounded-t-md">
          <Image
            src={movie.thumbnailUrl}
            alt="Thumbnail"
            fill
            objectFit="cover"
          />
        </div>
        <div className="z-10 bg-zinc-800 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md">
          <div className="flex items-center gap-3">
            <div
              // onClick={handlePlayButton}
              className="cursor-pointer w-6 h-6 lg:h-10 lg:w-10 rounded-full flex justify-center items-center transition bg-neutral-300"
            >
              <BsFillPlayFill size={30} />
            </div>
            <FavoriteButton favoriteIds={movie._id} />
          </div>
          <p className="text-green-400 font-bold mt-4">
            New <span className="text-white">2023</span>
          </p>
          <div className="flex mt-2 gap-2 items-center">
            <p className="text-white text-[10px] lg:text-sm">
              {movie.duration}
            </p>
          </div>
          <div className="flex mt-2 gap-2 items-center">
            <p className="text-white text-[10px] lg:text-sm">{movie.genre}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
