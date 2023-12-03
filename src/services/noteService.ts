import { Note, notes, cagedNotes } from "../config";
import { Caged } from "../config/Caged";
import { NOTES_LIST_MAX, NOTES_LIST_MIN } from "../config/constants";
import { getRandomItemFrom } from "../utils/random";
import { shuffle } from "../utils/shuffle";

export const getListOfRandomUniqueNotes = (count: number, allNotes?: Note[]): Note[] => {
  const randomNotes = shuffle(allNotes ?? notes);

  return randomNotes.slice(undefined, count);
};

export const getListOfRandomNotes = (count: number, allNotes?: Note[]): Note[] => {
  const randomNotes: Note[] = [];
  for(let i = 0; i < count; i++) {
    randomNotes.push(getRandomNote(allNotes));
  }
  return randomNotes;
}

export const isValidNoteCountList = (count: number): boolean => {
  return count >= NOTES_LIST_MIN && count <= NOTES_LIST_MAX
}

export const getRandomNote = (allNotes?: Note[]): Note => {
  return getRandomItemFrom(allNotes ?? notes);
};

export const getRandomNoteFromCaged = (): Caged => {
  return getRandomItemFrom(cagedNotes);
}
