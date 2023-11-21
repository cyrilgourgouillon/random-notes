import { Note, notes } from "../config/Notes";
import { shuffle } from "../utils/shuffle";

export const getListOfRandomNotes = () => {
  const randomNotes = shuffle(notes) as Note[];

  return randomNotes.slice(undefined, 7);
};
