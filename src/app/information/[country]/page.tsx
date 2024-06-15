import { getWeatherDetails } from "@/app/information/helpers/getWeatherDetails";
import Forecast from "@/sections/details/forecast/Forecast";
import { Weather } from "@/sections/details/weather";

export default async function Page({
  params,
}: {
  params: { country: string };
}) {
  const { weather, forecast } = await getWeatherDetails(params.country);

  return (
    <div className="container mx-auto p-6">
      <Weather weather={weather} />
      <Forecast forecast={forecast} />
    </div>
  );
}
