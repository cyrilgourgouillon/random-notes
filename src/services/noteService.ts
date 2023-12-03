import { Note, notes, cagedNotes } from "../config";
import { Caged } from "../config/Caged";
import { NOTES_LIST_MAX, NOTES_LIST_MIN } from "../config/constants";
import { getRandomItemFrom } from "../utils/random";
import { shuffle } from "../utils/shuffle";

export const getListOfRandomNotes = (count: number, allNotes?: Note[]): Note[] => {
  const randomNotes = shuffle(allNotes ?? notes);

  return randomNotes.slice(undefined, count);
};

export const isValidNoteCountList = (count: number): boolean => {
  return count >= NOTES_LIST_MIN && count <= NOTES_LIST_MAX
}

export const getRandomNote = (): Note => {
  return getRandomItemFrom(notes);
};

export const getRandomNoteFromCaged = (): Caged => {
  return getRandomItemFrom(cagedNotes);
}
