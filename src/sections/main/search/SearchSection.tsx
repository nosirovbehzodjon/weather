"use server";

import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { redirect } from "next/navigation";

async function handelSubmit(data: FormData) {
  "use server";
  const name = data.get("country") as string;

  if (name.length === 0) {
    return;
  }

  redirect("/information/" + name);
}

export const SearchSection = () => {
  return (
    <div className="w-full mb-32  text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:text-left">
      <div className="group w-full rounded-lg border  px-5 py-4 transition-colors border-neutral-700 hover:dark:bg-neutral-800/30">
        <form className="w-full" action={handelSubmit}>
          <div className="min-w-full md:min-w-[700px] mx-auto">
            <Input
              type="text"
              placeholder="Write country name..."
              name="country"
            />
            <div className="mb-2 flex justify-end">
              <Button type="submit" className="mt-3" color="secondary">
                search
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
