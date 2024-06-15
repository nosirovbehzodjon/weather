import { getLocalStorageItem } from "@/helpers/local-storage";
import { History } from "@/sections/main/history";

import { SearchSection } from "@/sections/main/search";
import { Metadata } from "next";
// import dynamic from "next/dynamic";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Weather App - Home Page",
  description: "search your city",
};
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-5 py-24 xl:p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b   from-zinc-200 pb-6 pt-8 backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:p-4 lg:bg-zinc-800/30">
          <code className="font-mono font-bold">
            Weather app with OpenWeatherMap
          </code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t  from-black via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="invert h-[24px] w-[100px]"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
      <SearchSection />
      <History />
    </main>
  );
}
