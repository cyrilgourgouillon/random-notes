import { createContext, useState } from 'react';
import { DEFAULT_NUMBER_OF_NOTE } from '../config/constants';
import { getListOfRandomChords, getRandomNoteFromCaged, isValidChordCountList } from '../services';
import { CagedType, Chord } from '../config';

interface ChordSettingsContextProps {
  chords: Chord[];
  numberOfChordDisplayed: number;
  isShapeVisible: boolean;
  cagedPosition: CagedType;
  getRandomChordsOnClick: () => void;
  changeNumberOfChordDisplayed: (step: number) => void;
  toggleShapeVisible: () => void;
}

export const ChordSettingsContext = createContext<ChordSettingsContextProps | undefined>(undefined);

export const ChordSettingsContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [chords, setChords] = useState<Chord[]>(getListOfRandomChords(DEFAULT_NUMBER_OF_NOTE));
  const [numberOfChordDisplayed, setNumberOfChordDisplayed] = useState(DEFAULT_NUMBER_OF_NOTE);
  const [isShapeVisible, setIsShapeVisible] = useState(false);
  const [cagedPosition, setCagedPosition] = useState<CagedType>(getRandomNoteFromCaged());

  const changeNumberOfChordDisplayed = (step: number) => {
    setNumberOfChordDisplayed((prevState: number) => {
      const value = prevState + step;
      if (isValidChordCountList(value)) {
        return value;
      }
      return prevState;
    });
  };

  const toggleShapeVisible = () => {
    setIsShapeVisible((prevState: boolean) => !prevState);
  };

  const getRandomChordsOnClick = () => {
    setChords(getListOfRandomChords(numberOfChordDisplayed));
    setCagedPosition(getRandomNoteFromCaged());
  };

  return (
    <ChordSettingsContext.Provider
      value={{
        chords,
        numberOfChordDisplayed,
        isShapeVisible,
        cagedPosition,
        getRandomChordsOnClick,
        changeNumberOfChordDisplayed,
        toggleShapeVisible,
      }}
    >
      {children}
    </ChordSettingsContext.Provider>
  );
};
