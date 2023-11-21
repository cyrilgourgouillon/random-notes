export enum Notes {
	'C',
	'C#',
	'Db',
	'D',
	'D#',
	'Eb',
	'E',
	'F',
	'F#',
	'Gb',
	'G',
	'G#',
	'Ab',
	'A',
	'A#',
	'Bb',
	'B',
}

export type Note = keyof typeof Notes;

export const notes = Object.values(Notes).filter(key => !isNaN(Number(key))) as Note[];
