"use client";
import { ILocalStorageItem } from "@/api/types/weather-details";
import { historyCityLogic } from "@/app/information/helpers/historyCityLogic";
import { Card } from "@/components/cards";
import { getLocalStorageItem } from "@/helpers/local-storage";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useState } from "react";

export const History = () => {
  const pathname = usePathname();
  const history = getLocalStorageItem<ILocalStorageItem[]>("list");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const isOk = pathname.includes("/information");
    if (isOk) {
      const country = pathname.split("/")[2];

      const payload: ILocalStorageItem = {
        name: country.toUpperCase(),
        description: "It was old city",
      };

      historyCityLogic("list", payload);
    }
    setIsMounted(true);
  }, [pathname]);

  if (!isMounted) {
    return null;
  }

  if (!history || history.length === 0) {
    return null;
  }

  return (
    <Fragment>
      <h2 className="text-2xl font-bold mb-4 uppercase mt-20 text-gray-300">
        Your history
      </h2>
      <div className="mb-32 gap-1 flex  flex-wrap text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        {history.map((item, index) => {
          return (
            <Card
              key={item.name + index}
              className="w-full text-left md:w-max md:min-w-[250px]"
            >
              <Link href={"/information/" + item.name.toLocaleLowerCase()}>
                <h2 className="mb-3 text-2xl font-semibold">
                  {item.name}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
              </Link>
              <p className="m-0 max-w-[30ch] text-sm opacity-50">
                {item.description}
              </p>
            </Card>
          );
        })}
      </div>
    </Fragment>
  );
};
