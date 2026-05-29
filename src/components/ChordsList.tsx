import { Chord } from '../config';

export const ChordsList = ({
  chords,
  ShapeDecorator,
  onClick,
}: {
  chords: Chord[];
  ShapeDecorator?: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <>
      <div className="practice-list-decorator">{ShapeDecorator}</div>
      <div
        onClick={onClick}
        className="practice-list"
      >
        {chords.map((chord: Chord, index: number) => (
          <div className='flex flex-row' key={index}><div>{chord.note}</div><div className='text-[25px] md:text-[55px] text-neutral-500'>{chord.chordType}</div></div>
        ))}
      </div>
    </>
  );
};
