import { useState } from "react";
import { Note, Notes } from "./config/Notes";
import { getListOfRandomNotes } from "./services/noteService";

const App = () => {
  const [notes, setNotes] = useState<Note[]>([] as Note[]);

  const handleOnClick = () => {
    setNotes(getListOfRandomNotes());
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="text-lg font-semibold">RANDOM NOTES GENERATOR</div>
        <div className="flex flex-col md:flex-row md:gap-7 text-[35px] md:text-[45px] mt-6 mb-6 font-bold">
          {notes.map((note: Note, index: number) => (
            <div key={index}>{Notes[note]}</div>
          ))}
        </div>
        <button
          onClick={handleOnClick}
          className="p-3 drop-shadow-md rounded-lg bg-white hover:bg-orange-50 active:bg-orange-200 border border-neutral-800"
        >
          Create random list of notes
        </button>
      </div>
    </div>
  );
};

export default App;
