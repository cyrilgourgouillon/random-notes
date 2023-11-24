export enum AppPages {
	notes = 'Notes',
	chords = 'Chords',
}

export type AppPage = keyof typeof AppPages;

export const appPages = Object.values(AppPages) as unknown as AppPage[];
