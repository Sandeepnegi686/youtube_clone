import { redirect } from "next/navigation";

async function Page({
  params,
}: {
  params: Promise<{ googleLoginSuccess: boolean }>;
}) {
  const { googleLoginSuccess } = await params;

  console.log(googleLoginSuccess);
  if (googleLoginSuccess) {
    redirect("/");
  } else {
    redirect("/auth");
  }
}

export default Page;
