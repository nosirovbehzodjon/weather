import { getWeatherDetails } from "@/app/information/helpers/getWeatherDetails";
import { Weather } from "@/sections/details/weather/Weather";

export default async function Page({
  params,
}: {
  params: { country: string };
}) {
  const { weather } = await getWeatherDetails(params.country);

  return (
    <div className="container mx-auto p-6">
      {/* <Weather weather={weather} /> */}
      {/* <Forecast forecast={forecast} /> */}
    </div>
  );
}
