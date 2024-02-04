"use client";
import Button from "@/components/common/Button/Button";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useFetchSession } from "@/hooks/useSesion";
import Home from "@/components/Home";

export default function HomePage() {
  // const {data: session} = useSession();

  let session = useFetchSession();

  console.log(session);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <Home />
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 "></div>
      </main>
    </>
  );
}
