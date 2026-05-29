export const guitarStrings = ['String 1', 'String 2', 'String 3', 'String 4', 'String 5', 'String 6'];

export type GuitarString = (typeof guitarStrings)[number];

export const guitarStringNames = ['E', 'B', 'G', 'D', 'A', 'E'] as const;

export type GuitarStringName = (typeof guitarStringNames)[number];
