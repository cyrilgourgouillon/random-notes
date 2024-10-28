import { Note } from '.';

export const chordTypes = ['M', 'm', 'maj7', 'min7', 'dom7'] as const;

export type ChordType = (typeof chordTypes)[number];

export type Chord = {
  note: Note;
  chordType: ChordType;
};
