import { guitarStringNames } from '../GuitarStrings';

export const fretNumbers = Array.from({ length: 12 }, (_, index) => index + 1);
export const fretboardDots = [3, 5, 7, 9, 12];
export const labelWidth = 24;
export const fretWidth = 25;
export const topPadding = 30;
export const stringGap = 20;
export const fretNumberTop = topPadding + stringGap * (guitarStringNames.length - 1) + 18;
