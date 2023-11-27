import { Chord } from '../config';
import { chordToString } from '../services/chordService';

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
      <div className="text-[25px] md:text-[25px] font-bold text-neutral-500">{ShapeDecorator}</div>
      <div
        onClick={onClick}
        className="flex flex-col md:flex-row md:gap-7 text-[35px] md:text-[75px] mb-6 font-bold cursor-pointer select-none"
      >
        {chords.map((chord: Chord, index: number) => (
          <div key={index}>{chordToString(chord)}</div>
        ))}
      </div>
    </>
  );
};
