import { useState } from "react";
import { Button } from "@chakra-ui/react";
import { MdBuild } from "react-icons/md";
import { TbArrowsRandom } from "react-icons/tb";

import { NotesList } from "../components";
import { Note } from "../config";

import { getListOfRandomNotes, getRandomString } from "../services";

export const NotesPage = () => {
  const [notes, setNotes] = useState<Note[]>(getListOfRandomNotes());
  const [isStringVisible, setIsStringVisible] = useState(false);
  const [guitarString, setGuitarString] = useState(getRandomString());

  const handleGetRandomNoteOnClick = () => {
    setNotes(getListOfRandomNotes());
    setGuitarString(getRandomString());
  };

  const toggleStringVisible = () => {
    setIsStringVisible((prevState: boolean) => !prevState);
  };

  const GuitarStringDecorator: React.ReactNode = (
    <div className={`${isStringVisible ? "" : "invisible"}`}>
      {guitarString}
    </div>
  );

  return (
    <div className="h-screen flex flex-col items-center justify-between">
      <div className="text-lg font-semibold mt-5">RANDOM NOTES GENERATOR</div>
      <div className="w-screen flex items-center justify-center">
        <div className="flex flex-col items-center">
          <NotesList
            notes={notes}
            GuitarStringDecorator={GuitarStringDecorator}
          />
          <div className="flex flex-col gap-1">
            <Button
              leftIcon={<TbArrowsRandom />}
              variant="outline"
              onClick={handleGetRandomNoteOnClick}
            >
              Generate list of notes
            </Button>
            <div className="flex w-full justify-center">
              <Button
                leftIcon={<MdBuild />}
                variant="outline"
                onClick={toggleStringVisible}
              >
                Add random string
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-5">
        {"Made with ❤️ by "}
        <a
          href="https://github.com/cyrilgourgouillon"
          target="_blank"
          className="text-red-700"
        >
          Cyril Gourgouillon
        </a>
      </div>
    </div>
  );
};
