import Image from "next/image";

export default function page() {
  return (
    <div className="relative bg-[url('/hero.jpg')] h-dvh w-full bg-center bg-no-repeat bg-cover">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60">
        <nav className="px-12 py-4">
          <Image
            src="/logo.png"
            alt="logo"
            className="h-12"
            width={200}
            height={100}
          />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black opacity-60 p-16 self-center mt-2 lg:w-2/5 lg">
            l
          </div>
        </div>
      </div>
    </div>
  );
}
