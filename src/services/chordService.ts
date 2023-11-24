import { getRandomNote } from "./";
import { Chord, ChordType, chords } from "../config";
import { getRandomItemFrom } from "../utils/random";
import { CHORDS_LIST_MAX, CHORDS_LIST_MIN } from "../config/constants";

export const getRandomChordType = (): ChordType => {
  return getRandomItemFrom(chords);
};

export const getRandomChord = (): Chord => {
  return { note: getRandomNote(), chordType: getRandomChordType() } as Chord;
};

export const chordToString = (chord: Chord): string => {
  return `${chord.note}${chord.chordType}`;
}

export const getListOfRandomChords = (count: number): Chord[] => {
  const randomChords: Chord[] = [];
  for(let i = 0; i < count; i++) {
    randomChords.push(getRandomChord());
  }
  return randomChords;
};

export const isValidChordCountList = (count: number): boolean => {
  return count >= CHORDS_LIST_MIN && count <= CHORDS_LIST_MAX
}
