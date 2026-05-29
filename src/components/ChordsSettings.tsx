import { ButtonGroup, IconButton, Button, Popover } from '@chakra-ui/react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { MdBuild } from 'react-icons/md';
import { CHORDS_LIST_MIN, CHORDS_LIST_MAX } from '../config/constants';
import { AutoSkipper } from './AutoSkipper';
import { useChordSettingsContext } from '../hooks';
import { ChordSelector } from './ChordTypeSelector';

export const ChordsSettings = () => {
  const {
    numberOfChordDisplayed,
    getRandomChordsOnClick,
    changeNumberOfChordDisplayed,
    isShapeVisible,
    toggleShapeVisible,
  } = useChordSettingsContext();

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <IconButton aria-label={'settings'}>
          <MdBuild />
        </IconButton>
      </Popover.Trigger>
      <Popover.Positioner>
        <Popover.Content>
          <Popover.Arrow />
          <Popover.Body>
            <div className="flex flex-col gap-3 items-stretch">
              <ButtonGroup variant="outline">
                <IconButton
                  aria-label="minus"
                  onClick={() => changeNumberOfChordDisplayed(-1)}
                  disabled={numberOfChordDisplayed === CHORDS_LIST_MIN}
                >
                  <FaMinus />
                </IconButton>
                <Button onClick={getRandomChordsOnClick}>Generate list of {numberOfChordDisplayed} chords</Button>
                <IconButton
                  aria-label="plus"
                  onClick={() => changeNumberOfChordDisplayed(1)}
                  disabled={numberOfChordDisplayed === CHORDS_LIST_MAX}
                >
                  <FaPlus />
                </IconButton>
              </ButtonGroup>
              <Button variant={isShapeVisible ? 'outline' : 'subtle'} gap={2} onClick={toggleShapeVisible}>
                <MdBuild />
                Toggle shape complexity
              </Button>
              <ChordSelector />
              <AutoSkipper />
            </div>
          </Popover.Body>
        </Popover.Content>
      </Popover.Positioner>
    </Popover.Root>
  );
};
