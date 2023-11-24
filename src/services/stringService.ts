import { GuitarString, guitarStrings } from "../config";
import { getRandomItemFrom } from "../utils/random";

export const getRandomString = (): GuitarString => {
  return getRandomItemFrom(guitarStrings);
};
