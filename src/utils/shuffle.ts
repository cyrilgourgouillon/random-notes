import { Note } from '../config/Notes';

export const shuffle = (array: readonly Note[]): Note[] => {
  const arrayCopy = [...array];

  return arrayCopy.sort(() => Math.random() - 0.5);
};
