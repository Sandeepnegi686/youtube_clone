// "use client";
// import { useAppContext } from "@/context/appContext";
// import { useRouter } from "next/navigation";
// import { useRouter } from "";
// import { useEffect } from "react";

// import { redirect } from "next/dist/server/api-utils";
// import { cookies } from "next/headers";
// import { redirect } from "next/navigation";

// import { useAppContext } from "@/context/appContext";

// import getUser from "@/lib/getUser";

async function Home() {
  // const cookieStore = cookies();
  // const token = await cookieStore.get("access-token")?.value;
  // if (!token) {
  //   redirect("/auth");
  // }
  // const router = useRouter();
  // const { user } = useAppContext();
  // if (!user) {
  //   router.push("/auth");
  // }
  // useEffect(
  //   function () {
  //     if (!user) {
  //     }
  //   },
  //   [user],
  // );
  return <h1 className="text-red-500">Youtube Clone</h1>;
}

export default Home;
