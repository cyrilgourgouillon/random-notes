import { useState } from "react";
import { Note } from "./config/Notes";
import { getListOfRandomNotes } from "./services/noteService";
import { Button, NotesList } from "./components";

const App = () => {
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
          <Button onClickCallback={handleOnClick}>
            Generate list of notes
          </Button>
        </div>
      </div>
      <div>
        {"Made with ❤️ by "}
        <a href="https://github.com/cyrilgourgouillon" target="_blank" className="text-red-700">
          Cyril Gourgouillon
        </a>
      </div>
    </div>
  );
};

export default App;
