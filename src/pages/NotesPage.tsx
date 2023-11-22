import { useState } from "react";
import { Button, IconButton } from "@chakra-ui/react";

import { MdBuild } from "react-icons/md";
import { FaPlus, FaMinus } from "react-icons/fa";

import { GuitarString, Note } from "../config";
import { NotesList } from "../components";

import { getListOfRandomNotes, getRandomString, isValidCountList } from "../services";
import { DEFAULT_NUMBER_OF_NOTE, NOTES_LIST_MAX, NOTES_LIST_MIN } from "../config/constants";

export const NotesPage = () => {
  const [notes, setNotes] = useState<Note[]>(getListOfRandomNotes(DEFAULT_NUMBER_OF_NOTE));
  const [isStringVisible, setIsStringVisible] = useState(false);
  const [guitarString, setGuitarString] = useState<GuitarString>(
    getRandomString()
  );
  const [numberOfNoteDisplayed, setNumberOfNoteDisplayed] = useState(
    DEFAULT_NUMBER_OF_NOTE
  );

  const handleGetRandomNoteOnClick = () => {
    setNotes(getListOfRandomNotes(numberOfNoteDisplayed));
    setGuitarString(getRandomString());
  };

  const toggleStringVisible = () => {
    setIsStringVisible((prevState: boolean) => !prevState);
  };

  const handleChangeNumberOfNoteDisplayed = (step: number) => {
    setNumberOfNoteDisplayed((prevState: number) => {
      const value = prevState + step;
      if (isValidCountList(value)) {
        return value;
      }
      return prevState;
    });
  };

  const GuitarStringDecorator: React.ReactNode = (
    <div className={`${isStringVisible ? "" : "invisible"}`}>
      {guitarString}
    </div>
  );

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div className="text-lg font-semibold mb-10">RANDOM NOTES GENERATOR</div>
      <div className="w-screen flex items-center justify-center">
        <div className="flex flex-col items-center">
          <NotesList
            notes={notes}
            GuitarStringDecorator={GuitarStringDecorator}
          />
          <div className="flex flex-col gap-1">
            <div className="flex gap-1">
              <IconButton
                aria-label="minus"
                icon={<FaMinus />}
                variant="outline"
                onClick={() => handleChangeNumberOfNoteDisplayed(-1)}
                disabled={numberOfNoteDisplayed === NOTES_LIST_MIN}
              />
              <Button variant="outline" onClick={handleGetRandomNoteOnClick}>
                Generate list of {numberOfNoteDisplayed} notes
              </Button>
              <IconButton
                aria-label="plus"
                icon={<FaPlus />}
                variant="outline"
                onClick={() => handleChangeNumberOfNoteDisplayed(1)}
                disabled={numberOfNoteDisplayed === NOTES_LIST_MAX}
              />
            </div>
            <Button
              leftIcon={<MdBuild />}
              variant="outline"
              onClick={toggleStringVisible}
            >
              Toggle string complexity
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
