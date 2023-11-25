import { Notes } from ".";

export enum Caged {
  Shape1 = `Shape ${Notes.C}`,
  Shape2 = `Shape ${Notes.A}`,
  Shape3 = `Shape ${Notes.G}`,
  Shape4 = `Shape ${Notes.E}`,
  Shape5 = `Shape ${Notes.D}`,
}

export type CagedType = keyof typeof Caged;

export const cagedNotes = Object.values(Caged) as unknown as CagedType[];
