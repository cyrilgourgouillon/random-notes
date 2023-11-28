import { createContext, useState } from 'react';
import { Speed } from '../config';

interface SpeedContextProps {
  speed: Speed | undefined,
  setCurrentSpeed: (speed?: Speed) => void,
}

export const SpeedContext = createContext<SpeedContextProps | undefined>(undefined);

export const SpeedContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [speed, setSpeed] = useState<Speed>();

  const setCurrentSpeed = (speed?: Speed) => {
    setSpeed(speed);
  }

  return (
    <SpeedContext.Provider
      value={{
        speed,
        setCurrentSpeed,
      }}
    >
      {children}
    </SpeedContext.Provider>
  );
};
