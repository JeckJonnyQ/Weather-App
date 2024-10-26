export default function getWeather(
  city: string,
  setWeather: (weather: { temp: number; description: string }) => void,
  setError: (error: string | null) => void
) {
  const apiKey = "c7813b460ee11c49aa753a1dcd35421b";

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  )
    .then((response) => response.json())
    .then((json) => {
      if (json.cod === "404") {
        setError("City not found");
      } else {
        setWeather({
          temp: json.main.temp,
          description: json.weather[0].description,
        });
        setError(null);
      }
    })
    .catch((_error) => {
      setError("An error occurred");
    });
}
