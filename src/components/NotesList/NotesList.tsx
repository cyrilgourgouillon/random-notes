import { Note } from "../../config/Notes";

export const NotesList = ({ notes }: { notes: Note[] }) => {
  return (
    <div className="flex flex-col md:flex-row md:gap-7 text-[35px] md:text-[45px] mt-6 mb-6 font-bold">
      {notes.map((note: Note, index: number) => <div key={index}>{note}</div>)}
    </div>
  );
};
