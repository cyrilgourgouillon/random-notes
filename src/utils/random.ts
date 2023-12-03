export const getRandomItemFrom = <T>(array: readonly T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};
