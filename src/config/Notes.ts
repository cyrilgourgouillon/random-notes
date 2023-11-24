export enum Notes {
  C = "C",
  Csharp = "C#",
  Dbemol = "Db",
  D = "D",
  Dsharp = "D#",
  Ebemol = "Eb",
  E = "E",
  F = "F",
  Fsharp = "F#",
  Gbemol = "Gb",
  G = "G",
  Gsharp = "G#",
  Abemol = "Ab",
  A = "A",
  Asharp = "A#",
  Bbemol = "Bb",
  B = "B",
}

export type Note = keyof typeof Notes;

export const notes = Object.values(Notes) as Note[];
