import { AbsoluteCenter, Box, Button, Separator } from '@chakra-ui/react';
import { Note, notes as allNotes } from '../config';
import { useNoteSettingsContext } from '../hooks';

export const NoteSelector = () => {
  const { availableNotes, setAvailableNotes } = useNoteSettingsContext();

  const handleRemoveNote = (note: Note) => {
    if (availableNotes.length !== 1) {
      setAvailableNotes(availableNotes.filter((n) => n !== note));
    }
  };

  const handleAddNote = (note: Note) => {
    setAvailableNotes([note, ...availableNotes]);
  };

  return (
    <>
      <Box position="relative" padding="2">
        <Separator />
        <AbsoluteCenter bg="white" px="4">
          Note selector
        </AbsoluteCenter>
      </Box>
      <div className="flex flex-row flex-wrap justify-center gap-1">
        {allNotes.map((note) => {
          const noteIsActive = availableNotes.includes(note);
          return (
            <Button
              key={note}
              variant="outline"
              width={'10px'}
              size="sm"
              data-active={noteIsActive ? '' : undefined}
              colorPalette={noteIsActive ? 'green' : 'gray'}
              onClick={() => {
                if (noteIsActive) {
                  handleRemoveNote(note);
                } else {
                  handleAddNote(note);
                }
              }}
            >
              {note}
            </Button>
          );
        })}
      </div>
    </>
  );
};
