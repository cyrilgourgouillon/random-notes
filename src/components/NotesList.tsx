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
      <div className="practice-list-decorator">{GuitarStringDecorator}</div>
      <div
        onClick={onClick}
        className="practice-list"
      >
        {notes.map((note: Note, index: number) => (
          <div className={isColored ? noteColors[note] : ''} key={index}>{note}</div>
        ))}
      </div>
    </>
  );
};
