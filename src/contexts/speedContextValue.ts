import { Dispatch, SetStateAction, createContext } from 'react';
import { Speed } from '../config';

export interface SpeedContextProps {
  speed: Speed | undefined;
  setCurrentSpeed: (speed?: Speed) => void;
  secondsElapsed: number;
  setSecondsElapsed: Dispatch<SetStateAction<number>>;
  resetSecondsElapsed: () => void;
}

export const SpeedContext = createContext<SpeedContextProps | undefined>(undefined);
