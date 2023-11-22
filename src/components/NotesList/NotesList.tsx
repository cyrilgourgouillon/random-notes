import { Note } from "../../config";

export const NotesList = ({
  notes,
  GuitarStringDecorator,
}: {
  notes: Note[];
  GuitarStringDecorator?: React.ReactNode;
}) => {
  return (
    <>
      <div className="text-[25px] md:text-[25px] font-bold text-neutral-500">{GuitarStringDecorator}</div>
      <div className="flex flex-col md:flex-row md:gap-7 text-[35px] md:text-[75px] mb-6 font-bold">
        {notes.map((note: Note, index: number) => (
          <div key={index}>{note}</div>
        ))}
      </div>
    </>
  );
};
