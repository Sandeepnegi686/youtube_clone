interface MobileMenuProps {
  visible?: boolean;
}

export default function MobileMenu({ visible }: MobileMenuProps) {
  if (!visible) return;
  return (
    <div className="bg-black w-56 absolute top-8 left-0 py-5 flex flex-col border-2 border-gray-800 rounded-md">
      <div className="flex flex-col gap-4">
        <div className="px-4 text-center text-white hover:underline">Home</div>
        <div className="px-4 text-center text-white hover:underline">
          Series
        </div>
        <div className="px-4 text-center text-white hover:underline">Films</div>
        <div className="px-4 text-center text-white hover:underline">
          New & Popular
        </div>
        <div className="px-4 text-center text-white hover:underline">
          My List
        </div>
        <div className="px-4 text-center text-white hover:underline">
          Browse by Languages
        </div>
      </div>
    </div>
  );
}
