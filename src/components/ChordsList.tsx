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
      <div className="practice-list-decorator">{ShapeDecorator}</div>
      <div
        onClick={onClick}
        className="practice-list"
      >
        {chords.map((chord: Chord, index: number) => (
          <div key={index}>{chordToString(chord)}</div>
        ))}
      </div>
    </>
  );
};
