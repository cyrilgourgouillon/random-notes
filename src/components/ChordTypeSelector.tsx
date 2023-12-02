import { AbsoluteCenter, Box, Button, Divider } from '@chakra-ui/react';
import { ChordType, chordTypes as allChords } from '../config';
import { useChordSettingsContext } from '../hooks';

export const ChordSelector = () => {
  const { availableChordTypes, setAvailableChordTypes } = useChordSettingsContext();

  const handleRemoveChordType = (chord: ChordType) => {
    if (availableChordTypes.length !== 1) {
      setAvailableChordTypes(availableChordTypes.filter((n) => n !== chord));
    }
  };

  const handleAddChordType = (chord: ChordType) => {
    setAvailableChordTypes([chord, ...availableChordTypes]);
  };

  return (
    <>
      <Box position="relative" padding="2">
        <Divider />
        <AbsoluteCenter bg="white" px="4">
          Chords selector
        </AbsoluteCenter>
      </Box>
      <div className="flex flex-row flex-wrap justify-center gap-1">
        {allChords.map((chord) => {
          const chordIsActive = availableChordTypes.includes(chord);
          return (
            <Button
              key={chord}
              variant="outline"
              size="sm"
              isActive={chordIsActive}
              colorScheme={chordIsActive ? 'green' : 'gray'}
              onClick={() => {
                if (chordIsActive) {
                  handleRemoveChordType(chord);
                } else {
                  handleAddChordType(chord);
                }
              }}
            >
              {chord}
            </Button>
          );
        })}
      </div>
    </>
  );
};
