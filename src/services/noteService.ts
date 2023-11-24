import { Note, notes } from "../config";
import { NOTES_LIST_MAX, NOTES_LIST_MIN } from "../config/constants";
import { getRandomItemFrom } from "../utils/random";
import { shuffle } from "../utils/shuffle";

export const getListOfRandomNotes = (count: number): Note[] => {
  const randomNotes = shuffle(notes);

  return randomNotes.slice(undefined, count);
};

export const isValidNoteCountList = (count: number): boolean => {
  return count >= NOTES_LIST_MIN && count <= NOTES_LIST_MAX
}

export const getRandomNote = (): Note => {
  return getRandomItemFrom(notes);
};
