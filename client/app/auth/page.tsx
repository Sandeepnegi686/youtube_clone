"use client";
import Image from "next/image";
import Input from "@/app/_components/Input";
import { useCallback, useState } from "react";

type varientType = "login" | "register";

export default function Page() {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [varient, setVarient] = useState<varientType>("login");
  const toggleVarient = useCallback(() => {
    setVarient((currentVarient) =>
      currentVarient === "login" ? "register" : "login",
    );
  }, []);

  return (
    <div className="relative h-dvh w-full">
      <div className="absolute top-0 left-0 w-full h-full brightness-15 lg:brightness-60 z-[-1]">
        <Image
          src="/hero.jpg"
          alt=""
          fill
          className="max-w-full h-full object-cover"
        />
      </div>
      <nav className="px-12 py-5">
        <Image src="/logo.png" width={200} height={100} alt="logo" />
      </nav>
      <div className="flex justify-center">
        <div className="bg-black p-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
          <h2 className="text-white text-4xl mb-8 font-semibold">
            {varient === "login" ? "Sign In" : "Register"}
          </h2>
          <div className="flex flex-col gap-4">
            {varient === "register" && (
              <Input
                id="name"
                label="Username"
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
              />
            )}
            <Input
              id="email"
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
            />
            <Input
              id="password"
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
            />
          </div>
          <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition cursor-pointer font-medium">
            {varient === "login" ? "Login" : "Sign up"}
          </button>
          <p className="text-neutral-500 mt-12">
            {varient === "login"
              ? "First time using Netflix?"
              : "Already have an account?"}
            <span
              className="text-white ml-1 hover:underline cursor-pointer"
              onClick={toggleVarient}
            >
              {varient === "login" ? "Create an account" : "Login"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
