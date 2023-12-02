import { getRandomNote } from "./";
import { Chord, ChordType, chordTypes } from "../config";
import { getRandomItemFrom } from "../utils/random";
import { CHORDS_LIST_MAX, CHORDS_LIST_MIN } from "../config/constants";

export const getRandomChordType = (allChordTypes?: ChordType[]): ChordType => {
  return getRandomItemFrom(allChordTypes ?? chordTypes);
};

export const getRandomChord = (allChordTypes?: ChordType[]): Chord => {
  return { note: getRandomNote(), chordType: getRandomChordType(allChordTypes)} as Chord;
};

export const chordToString = (chord: Chord): string => {
  return `${chord.note}${chord.chordType}`;
}

export const getListOfRandomChords = (count: number, allChordTypes?: ChordType[]): Chord[] => {
  const randomChords: Chord[] = [];
  for(let i = 0; i < count; i++) {
    randomChords.push(getRandomChord(allChordTypes));
  }
  return randomChords;
};

export const isValidChordCountList = (count: number): boolean => {
  return count >= CHORDS_LIST_MIN && count <= CHORDS_LIST_MAX
}
