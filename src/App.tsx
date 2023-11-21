import { useState } from "react";
import { Note } from "./config/Notes";
import { getListOfRandomNotes } from "./services/noteService";
import { Button, NotesList } from "./components";

const App = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  const handleOnClick = () => {
    setNotes(getListOfRandomNotes());
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="text-lg font-semibold">RANDOM NOTES GENERATOR</div>
        <NotesList notes={notes} />
        <Button onClickCallback={handleOnClick}>Generate list of notes</Button>
      </div>
    </div>
  );
};

export default App;
