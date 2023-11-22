import { useState } from "react";

import { MdBuild } from "react-icons/md";
import { NotesList } from "../components";
import { Note } from "../config/Notes";
import { getListOfRandomNotes } from "../services/noteService";
import { Button } from "@chakra-ui/react";

export const NotesPage = () => {
  const [notes, setNotes] = useState<Note[]>(getListOfRandomNotes());

  const handleOnClick = () => {
    setNotes(getListOfRandomNotes());
  };

  return (
    <div className="h-screen flex flex-col items-center justify-around">
      <div className="text-lg font-semibold">RANDOM NOTES GENERATOR</div>
      <div className="w-screen flex items-center justify-center">
        <div className="flex flex-col items-center">
          <NotesList notes={notes} />
          <div className="flex flex-col gap-1">
            <Button colorScheme="green" variant="outline" onClick={handleOnClick}>
              Generate list of notes
            </Button>
            <div className="flex w-full justify-center">
              <Button leftIcon={<MdBuild />} variant="outline">
                Add strings
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div>
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
