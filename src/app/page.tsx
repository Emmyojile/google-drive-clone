"use client"
import Button from "@/components/common/Button/Button";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";

export default function HomePage() {
  const {data: session} = useSession();

  console.log(session);
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Wecome <span className="text-[hsl(280,100%,70%)]">{session?.user.name}</span> 
        </h1>
        <img src={session?.user.image as string} alt="image"/>
        <Button 
        onClick={() => signIn()}
        btnClass="btn-primary"
        title="Sign Up!!!"
        />
        {/* <button className="btn btn-primary">Button</button> */}
      </div>
    </main>
  );
}
