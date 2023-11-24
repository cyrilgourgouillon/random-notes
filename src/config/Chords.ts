import { Note } from ".";

export enum ChordsType {
	Major = '',
	Minor = 'm',
	MajorSeventh = 'maj7',
	MinorSeventh = 'min7'
}

export type ChordType = keyof typeof ChordsType;

export const chords = Object.values(ChordsType) as unknown as ChordType[];

export type Chord = {
	note: Note,
	chordType: ChordType,
}
