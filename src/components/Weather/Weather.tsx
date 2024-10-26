import "./Weather.scss";

type Props = {
  temp: number;
  description: string;
};

export const Weather = ({ temp, description }: Props) => {
  return (
    <div className="weather">
      <p className="weather__temp">
        <span className="color-blue">Temperature:</span> {temp} °C
      </p>
      <p className="weather__desc">
        <span className="color-blue">Weather:</span> {description}
      </p>
    </div>
  );
};
