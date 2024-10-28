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
      <div className="text-[25px] md:text-[25px] font-bold text-neutral-500">{ShapeDecorator}</div>
      <div
        onClick={onClick}
        className="flex flex-col md:flex-row md:gap-7 text-[35px] md:text-[75px] mb-6 font-bold cursor-pointer select-none"
      >
        {chords.map((chord: Chord, index: number) => (
          <div className='flex flex-row' key={index}><div>{chord.note}</div><div className='text-[25px] md:text-[55px] text-neutral-500'>{chord.chordType}</div></div>
        ))}
      </div>
    </>
  );
};
