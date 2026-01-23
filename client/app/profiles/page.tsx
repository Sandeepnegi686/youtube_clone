"use client";
import { useAppContext } from "@/context/appContext";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const { user } = useAppContext();
  return (
    <div className="flex items-center justify-center bg-black opacity-90 w-full h-dvh">
      <div className="flex flex-col">
        <h1 className="text-3xl md:text-6xl text-white">Who is watching?</h1>
        <div className="flex items-center justify-center gap-4 md:mt-10 mt-5">
          <div
            className="group flex flex-col items-center w-44 mx-auto"
            onClick={() => router.push("/")}
          >
            <div className="relative w-20 h-20 md:w-44 md:h-44 rounded-md flex justify-center items-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden">
              <Image src="/blue_logo.jpg" alt="logo" fill objectFit="cover" />
            </div>
            <div className="mt-1 md:mt-2 text-gray-400 text-sm md:text-xl text-center group-hover:text-white">
              {user?.name}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
