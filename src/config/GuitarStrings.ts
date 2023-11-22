export enum GuitarStrings {
	String1 = 'String 1',
	String2 = 'String 2',
	String3 = 'String 3',
	String4 = 'String 4',
	String5 = 'String 5',
	String6 = 'String 6',
}

export type GuitarString = keyof typeof GuitarStrings;

export const guitarStrings = Object.values(GuitarStrings) as unknown as GuitarString[];
