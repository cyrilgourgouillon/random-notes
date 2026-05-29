import { useContext } from "react";
import { SpeedContext } from "../contexts/speedContextValue";

export const useSpeedContext = () => {
  const context = useContext(SpeedContext);
  if (!context) {
    throw new Error('useSpeedContext must be used within a SpeedContextProvider');
  }
  return context;
};
