import { GuitarString, guitarStrings } from "../config";

export const getRandomString = (): GuitarString => {
  return guitarStrings[Math.floor(Math.random()*guitarStrings.length)];
};
