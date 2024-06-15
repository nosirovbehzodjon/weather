"use client";

import { Button } from "@/components/button";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <h1 className="text-lg lg:text-4xl font-bold text-gray-300  mb-4">
        Page not found
      </h1>
      <p className="text-lg text-gray-600 mb-8">{error.message}</p>
      <Link href={"/"}>
        <Button>Go back</Button>
      </Link>
    </div>
  );
}
