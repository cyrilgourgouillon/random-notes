import { Dispatch, SetStateAction, createContext, useCallback, useEffect, useState } from "react";
import { DEFAULT_NUMBER_OF_NOTE } from "../config/constants";
import {
  getListOfRandomNotesOf,
  getRandomString,
  isValidNoteCountList,
} from "../services";
import { GuitarString, Note, notes as allNotes } from "../config";
import { useSpeedContext } from "../hooks";

interface NoteSettingsContextProps {
  notes: Note[];
  availableNotes: Note[],
  setAvailableNotes: Dispatch<SetStateAction<Note[]>>
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
  const [availableNotes, setAvailableNotes] = useState<Note[]>([...allNotes]);
  const [notes, setNotes] = useState<Note[]>(
    getListOfRandomNotesOf(availableNotes, DEFAULT_NUMBER_OF_NOTE)
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
    setNotes(getListOfRandomNotesOf(availableNotes, numberOfNoteDisplayed));
    setGuitarString(getRandomString());
  }, [availableNotes, numberOfNoteDisplayed]);

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
        availableNotes,
        setAvailableNotes,
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
