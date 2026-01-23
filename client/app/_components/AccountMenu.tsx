import API_BASE_URL from "@/lib/api";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface AccountMenuProps {
  visible?: boolean;
}

export default function AccountMenu({ visible }: AccountMenuProps) {
  const router = useRouter();
  if (!visible) return;

  async function handleSignOut() {
    const response = await fetch(`${API_BASE_URL}/api/v1/auth/logout`, {
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error(`HTTP error. Status code:  ${response.status}`);
    }
    const data = await response.json();
    if (data.s) {
      router.push("/auth");
    }
  }

  return (
    <div className="bg-black w-56 absolute top-14 right-0 py-4 flez flex-col border-2 border-gray-800">
      <div className="flex flex-col gap-3">
        <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
          <div className="w-8 h-8 relative">
            <Image
              src="/blue_logo.jpg"
              alt="profile logo"
              fill
              className="rounded-md"
              objectFit="cover"
            />
          </div>
          <p className="text-white text-sm group-hover/item:underline">
            username
          </p>
        </div>
        <hr className="bg-gray-600 border-0 h-px my-4" />
        <div
          className="px-3 text-center text-white text-sm hover:underline"
          onClick={handleSignOut}
        >
          Sign out of Netflix.
        </div>
      </div>
    </div>
  );
}
