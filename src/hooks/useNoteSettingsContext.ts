import { useContext } from "react";
import { NoteSettingsContext } from "../contexts/NoteContext";

export const useNoteSettingsContext = () => {
  const context = useContext(NoteSettingsContext);
  if (!context) {
    throw new Error('useNoteSettingsContext must be used within a NoteSettingsContextProvider');
  }
  return context;
};
