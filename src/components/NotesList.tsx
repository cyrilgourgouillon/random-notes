import { Note, noteColors } from '../config';

export const NotesList = ({
  notes,
  GuitarStringDecorator,
  onClick,
  isColored,
}: {
  notes: Note[];
  GuitarStringDecorator?: React.ReactNode;
  onClick?: () => void;
  isColored: boolean;
}) => {
  return (
    <>
      <div className="text-[25px] md:text-[25px] font-bold text-neutral-500">{GuitarStringDecorator}</div>
      <div
        onClick={onClick}
        className="flex flex-col flex-wrap md:flex-row md:gap-7 text-[35px] md:text-[75px] mb-6 font-bold cursor-pointer select-none"
      >
        {notes.map((note: Note, index: number) => (
          <>
            <div className={isColored ? noteColors[note] : ''} key={index}>{note}</div>
          </>
        ))}
      </div>
    </>
  );
};
