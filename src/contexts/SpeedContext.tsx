import { Dispatch, SetStateAction, createContext, useEffect, useState } from 'react';
import { Speed } from '../config';

interface SpeedContextProps {
  speed: Speed | undefined,
  setCurrentSpeed: (speed?: Speed) => void,
  secondsElapsed: number,
  setSecondsElapsed: Dispatch<SetStateAction<number>>,
  resetSecondsElapsed: () => void,
}

export const SpeedContext = createContext<SpeedContextProps | undefined>(undefined);

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
    if (speed) {
      const stepInterval = setInterval(() => {
        setSecondsElapsed((prevState: number) => prevState + 1);
      }, 1000);

      return () => clearInterval(stepInterval);
    }
  }, [secondsElapsed, setSecondsElapsed, speed]);

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
