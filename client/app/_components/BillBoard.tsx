import { useRandomMovie } from "@/hooks/getRandomMovies";
import { AiOutlineInfoCircle } from "react-icons/ai";
import PlayButton from "./PlayButton";
import { useCallback } from "react";
import useInfoModel from "@/hooks/useInfoModel";

export default function Page() {
  const { movie } = useRandomMovie();

  const { openModel } = useInfoModel();

  const handleOpenModal = useCallback(
    function () {
      setTimeout(function () {
        openModel(movie._id);
      }, 300);
    },
    [movie._id, openModel],
  );

  return (
    <div className="relative h-[56.25vw]">
      <video
        className="w-full h-[56.25vw] object-cover brightness-60"
        autoPlay
        muted
        loop
        poster={movie.thumbnailUrl}
        src={movie.videoUrl}
      ></video>
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <p className="text-white text-xl md:text-5xl lg:text-6xl h-full w-[50%] font-bold drop-shadow-xl">
          {movie.title}
        </p>
        <p className="text-white text-sm md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[70%]">
          {movie.description}
        </p>
        <div className="flex items-center mt-3 md:mt-4 gap-4">
          <PlayButton movieId={movie._id} />
          <button
            className="bg-gray-500 text-white rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex items-center hover:bg-gray-600 transition cursor-pointer"
            onClick={handleOpenModal}
          >
            <AiOutlineInfoCircle className="mr-2" size={25} /> More Info
          </button>
        </div>
      </div>
    </div>
  );
}
