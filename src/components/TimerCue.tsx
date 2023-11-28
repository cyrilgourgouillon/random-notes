import { useEffect, useState } from 'react';
import { Speed } from '../config';
import { GoDot, GoDotFill } from 'react-icons/go';

export const TimerCue = ({ speed }: { speed: Speed }) => {
  const numberOfDots = speed / 1000 - 1;
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
        console.log('tic');

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

  return <div className="flex mb-3 text-2xl text-blue-600">{dots.map((d) => d)}</div>;
};
