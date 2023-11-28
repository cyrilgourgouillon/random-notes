import { createContext, useCallback, useEffect, useState } from "react";
import { DEFAULT_NUMBER_OF_NOTE } from "../config/constants";
import {
  getListOfRandomNotes,
  getRandomString,
  isValidNoteCountList,
} from "../services";
import { GuitarString, Note } from "../config";
import { useSpeedContext } from "../hooks";

interface NoteSettingsContextProps {
  notes: Note[];
  numberOfNoteDisplayed: number;
  isStringVisible: boolean;
  guitarString: GuitarString;
  getRandomNotesOnClick: () => void;
  changeNumberOfNoteDisplayed: (step: number) => void;
  toggleStringVisible: () => void;
}

export const NoteSettingsContext = createContext<
  NoteSettingsContextProps | undefined
>(undefined);

export const NoteSettingsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [notes, setNotes] = useState<Note[]>(
    getListOfRandomNotes(DEFAULT_NUMBER_OF_NOTE)
  );
  const [numberOfNoteDisplayed, setNumberOfNoteDisplayed] = useState(
    DEFAULT_NUMBER_OF_NOTE
  );
  const [isStringVisible, setIsStringVisible] = useState(false);
  const [guitarString, setGuitarString] = useState<GuitarString>(
    getRandomString()
  );

  const { speed, secondsElapsed, resetSecondsElapsed } = useSpeedContext();

  const changeNumberOfNoteDisplayed = (step: number) => {
    setNumberOfNoteDisplayed((prevState: number) => {
      const value = prevState + step;
      if (isValidNoteCountList(value)) {
        return value;
      }
      return prevState;
    });
  };

  const toggleStringVisible = () => {
    setIsStringVisible((prevState: boolean) => !prevState);
  };

  const getRandomNotesOnClick = useCallback(() => {
    setNotes(getListOfRandomNotes(numberOfNoteDisplayed));
    setGuitarString(getRandomString());
  }, [numberOfNoteDisplayed]);

  useEffect(() => {
    if (speed && speed / 1000 === secondsElapsed) {
      getRandomNotesOnClick();
      resetSecondsElapsed();
    }
  }, [getRandomNotesOnClick, resetSecondsElapsed, secondsElapsed, speed]);

  useEffect(() => {
    resetSecondsElapsed();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [speed]);

  return (
    <NoteSettingsContext.Provider
      value={{
        notes,
        numberOfNoteDisplayed,
        isStringVisible,
        guitarString,
        getRandomNotesOnClick,
        changeNumberOfNoteDisplayed,
        toggleStringVisible,
      }}
    >
      {children}
    </NoteSettingsContext.Provider>
  );
};
