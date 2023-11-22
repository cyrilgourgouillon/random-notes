import { Note, notes } from "../config";
import { shuffle } from "../utils/shuffle";

export const getListOfRandomNotes = (): Note[] => {
  const randomNotes = shuffle(notes);

  return randomNotes.slice(undefined, 7);
};
