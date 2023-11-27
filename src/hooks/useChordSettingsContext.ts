import { useContext } from "react";
import { ChordSettingsContext } from "../contexts/ChordContext";

export const useChordSettingsContext = () => {
  const context = useContext(ChordSettingsContext);
  if (!context) {
    throw new Error('useChordSettingsContext must be used within a ChordSettingsContextProvider');
  }
  return context;
};
