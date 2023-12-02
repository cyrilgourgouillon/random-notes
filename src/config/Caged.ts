export const cagedNotes = [
	`Shape C`,
	`Shape A`,
	`Shape G`,
	`Shape E`,
	`Shape D`,
] as const

export type Caged = typeof cagedNotes[number];