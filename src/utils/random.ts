export const getRandomItemFrom = <T>(arrary: T[]): T => {
  return arrary[Math.floor(Math.random()*arrary.length)];
};
