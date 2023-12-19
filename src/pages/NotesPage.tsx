import { NotesList, NotesSettings, TimerCue } from '../components';
import { useNoteSettingsContext, useSpaceBarEffect, useSpeedContext } from '../hooks';

export const NotesPage = () => {
  const { notes, isStringVisible, guitarString, getRandomNotesOnClick } = useNoteSettingsContext();
  const { resetSecondsElapsed } = useSpeedContext();

  const handleNotesListOnClick = () => {
    getRandomNotesOnClick();
    resetSecondsElapsed();
  }

  useSpaceBarEffect(handleNotesListOnClick);

  const GuitarStringDecorator: React.ReactNode = (
    <div className={`${isStringVisible ? '' : 'invisible'}`}>{guitarString}</div>
  );

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div className="w-screen flex items-center justify-center">
        <div className="flex flex-col items-center">
          <NotesList notes={notes} GuitarStringDecorator={GuitarStringDecorator} onClick={handleNotesListOnClick} />
          <TimerCue />
          <NotesSettings />
        </div>
      </div>
    </div>
  );
};
