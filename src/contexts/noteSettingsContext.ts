import { Dispatch, SetStateAction, createContext } from 'react';
import { GuitarString, Note } from '../config';

export interface NoteSettingsContextProps {
  notes: Note[];
  availableNotes: Note[];
  setAvailableNotes: Dispatch<SetStateAction<Note[]>>;
  numberOfNoteDisplayed: number;
  isStringVisible: boolean;
  isColorVisible: boolean;
  guitarString: GuitarString;
  getRandomNotesOnClick: () => void;
  changeNumberOfNoteDisplayed: (step: number) => void;
  toggleStringVisible: () => void;
  toggleColorVisible: () => void;
}

export const NoteSettingsContext = createContext<NoteSettingsContextProps | undefined>(undefined);
