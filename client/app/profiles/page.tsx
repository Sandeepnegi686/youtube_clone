import Image from "next/image";

export default function Page() {
  //   function handleOnClick() {}
  return (
    <div className="flex items-center justify-center bg-black opacity-90 w-full h-dvh">
      <div className="flex flex-col">
        <h1 className="text-2xl md:text-6xl text-white">Who is watching?</h1>
        <div className="flex items-center justify-center gap-4 mt-10">
          <div>
            <div className="gourp flex-row w-44 mx-auto">
              <div className="w-44 h-44 rounded-md flex justify-center items-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden">
                <Image
                  src="/blue_logo.jpg"
                  alt="logo"
                  width={100}
                  height={100}
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
