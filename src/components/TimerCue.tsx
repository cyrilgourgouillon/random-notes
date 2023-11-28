import { useEffect, useState } from "react";
import { Speed } from "../config";
import { GoDot, GoDotFill } from "react-icons/go";
import { useSpeedContext } from "../hooks";

export const TimerCue = () => {
  const { speed } = useSpeedContext();

  const numberOfDots = speed ? speed / 1000 - 1 : 0;
  const [secondsElapsed, setSecondsElapsed] = useState(0);

  const dots: React.ReactNode[] = [];

  for (let i = 0; i < secondsElapsed; i++) {
    dots.push(<GoDotFill />);
  }
  for (let i = 0; i < numberOfDots - secondsElapsed; i++) {
    dots.push(<GoDot />);
  }

  useEffect(() => {
    setSecondsElapsed(0);
    if (speed) {
      const stepInterval = setInterval(() => {
        setSecondsElapsed((prevState: number) => prevState + 1);
      }, 1000);

      return () => clearInterval(stepInterval);
    }
  }, [speed]);

  useEffect(() => {
    if (secondsElapsed > numberOfDots) {
      setSecondsElapsed(0);
    }
  }, [secondsElapsed, numberOfDots]);

  if (speed === Speed.rush) {
    return <></>;
  }

  return (
    <div className="flex mb-3 text-2xl text-blue-600">{dots.map((d, i) => <div key={i}>{d}</div>)}</div>
  );
};
