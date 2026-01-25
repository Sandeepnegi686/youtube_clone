import { MovieType } from "@/types/MovieType";
import { AiOutlineInfoCircle } from "react-icons/ai";

export default function Page({ movie }: { movie: MovieType }) {
  return (
    <div className="relative h-[56.25vw]">
      <video
        className="w-full h-[56.25vw] object-cover brightness-60"
        autoPlay
        muted
        loop
        poster={movie.thumbnailUrl}
        // src={movie.videoUrl}
      ></video>
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <p className="text-white text-xl md:text-5xl lg:text-6xl h-full w-[50%] font-bold drop-shadow-xl">
          {movie.title}
        </p>
        <p className="text-white text-sm md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[70%]">
          {movie.description}
        </p>
        <div className="flex items-center mt-3 md:mt-4 gap-3">
          <button className="bg-gray-500 text-white rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex items-center hover:bg-gray-600 transition cursor-pointer">
            <AiOutlineInfoCircle className="mr-2" /> More Info
          </button>
        </div>
      </div>
    </div>
  );
}
