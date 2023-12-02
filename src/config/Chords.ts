import { Note } from ".";

export enum ChordsType {
  Major = "M",
  Minor = "m",
  MajorSeventh = "maj7",
  MinorSeventh = "min7",
}

export type ChordType = '' | 'm' | 'maj7' | 'min7';

export const chordTypes = Object.values(ChordsType) as ChordType[];

export type Chord = {
  note: Note;
  chordType: ChordType;
};
