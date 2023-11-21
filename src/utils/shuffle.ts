import { Note } from "../config/Notes";

export const shuffle = (array: Note[]) => {
	const arrayCopy = [...array];

  return arrayCopy.sort(() => Math.random() - 0.5);
};
