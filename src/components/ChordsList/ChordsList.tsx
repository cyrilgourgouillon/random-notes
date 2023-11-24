import { Chord } from "../../config";
import { chordToString } from "../../services/chordService";

export const ChordsList = ({ chords }: { chords: Chord[] }) => {
  return (
    <div className="flex flex-col md:flex-row md:gap-7 text-[35px] md:text-[75px] mb-6 font-bold">
      {chords.map((chord: Chord, index: number) => (
        <div key={index}>{chordToString(chord)}</div>
      ))}
    </div>
  );
};
