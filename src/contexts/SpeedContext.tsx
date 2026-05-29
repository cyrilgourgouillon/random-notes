import { useEffect, useState } from 'react';
import { Speed } from '../config';
import { SpeedContext } from './speedContextValue';

export const SpeedContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [speed, setSpeed] = useState<Speed>();
  const [secondsElapsed, setSecondsElapsed] = useState(0);

  const setCurrentSpeed = (speed?: Speed) => {
    setSpeed(speed);
  }

  const resetSecondsElapsed = () => {
    setSecondsElapsed(0);
  }

  useEffect(() => {
    if (!speed) {
      return;
    }

    const stepInterval = setInterval(() => {
      setSecondsElapsed((prevState: number) => prevState + 1);
    }, 1000);

    return () => clearInterval(stepInterval);
  }, [speed]);

  return (
    <SpeedContext.Provider
      value={{
        speed,
        setCurrentSpeed,
        secondsElapsed,
        setSecondsElapsed,
        resetSecondsElapsed,
      }}
    >
      {children}
    </SpeedContext.Provider>
  );
};
