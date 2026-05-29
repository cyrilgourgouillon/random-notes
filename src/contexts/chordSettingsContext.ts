import { Dispatch, SetStateAction, createContext } from 'react';
import { Caged, Chord, ChordType } from '../config';

export interface ChordSettingsContextProps {
  chords: Chord[];
  availableChordTypes: ChordType[];
  setAvailableChordTypes: Dispatch<SetStateAction<ChordType[]>>;
  numberOfChordDisplayed: number;
  isShapeVisible: boolean;
  cagedPosition: Caged;
  getRandomChordsOnClick: () => void;
  changeNumberOfChordDisplayed: (step: number) => void;
  toggleShapeVisible: () => void;
}

export const ChordSettingsContext = createContext<ChordSettingsContextProps | undefined>(undefined);
