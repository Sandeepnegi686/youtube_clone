import { useRouter } from "next/navigation";
import React from "react";
import { BsFillPlayFill } from "react-icons/bs";

interface PlayButtonProps {
  movieId: string;
}

export default function PlayButton({ movieId }: PlayButtonProps) {
  const router = useRouter();
  return (
    <button
      className="bg-white rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex items-center hover:bg-neutral-300 transition cursor-pointer"
      onClick={() => router.push(`/watch/${movieId}`)}
    >
      <BsFillPlayFill className="mr-2" size={25} />
      Play
    </button>
  );
}
