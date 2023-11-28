import { Speed } from "../config";
import { GoDot, GoDotFill } from "react-icons/go";
import { useSpeedContext } from "../hooks";

export const TimerCue = () => {
  const { speed, secondsElapsed } = useSpeedContext();

  const numberOfDots = speed ? speed / 1000: 0;
  const dots: React.ReactNode[] = [];

  for (let i = 0; i < secondsElapsed; i++) {
    dots.push(<GoDotFill />);
  }
  for (let i = 0; i < numberOfDots - secondsElapsed; i++) {
    dots.push(<GoDot />);
  }

  if (speed === Speed.rush) {
    return <></>;
  }

  return (
    <div className="flex mb-3 text-2xl text-blue-600">{dots.map((d, i) => <div key={i}>{d}</div>)}</div>
  );
};
