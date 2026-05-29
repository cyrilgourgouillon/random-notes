import { ButtonGroup, IconButton, Button, Popover } from '@chakra-ui/react';
import { FaMinus, FaPlus, FaGuitar } from 'react-icons/fa';
import { BiSolidColor } from 'react-icons/bi';
import { MdBuild } from 'react-icons/md';
import { NOTES_LIST_MIN, NOTES_LIST_MAX } from '../config/constants';
import { AutoSkipper } from './AutoSkipper';
import { useNoteSettingsContext } from '../hooks';
import { NoteSelector } from '.';

export const NotesSettings = () => {
  const {
    numberOfNoteDisplayed,
    getRandomNotesOnClick,
    changeNumberOfNoteDisplayed,
    toggleStringVisible,
    toggleColorVisible,
    isStringVisible,
    isColorVisible,
  } = useNoteSettingsContext();

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <IconButton aria-label={'settings'}>
          <MdBuild />
        </IconButton>
      </Popover.Trigger>
      <Popover.Positioner>
        <Popover.Content width={'350px'}>
          <Popover.Arrow />
          <Popover.Body>
            <div className="flex flex-col gap-3 items-stretch w-full">
              <ButtonGroup variant="outline" className="flex flex-row items-stretch justify-stretch">
                <IconButton
                  aria-label="minus"
                  onClick={() => changeNumberOfNoteDisplayed(-1)}
                  disabled={numberOfNoteDisplayed === NOTES_LIST_MIN}
                >
                  <FaMinus />
                </IconButton>
                <Button className="grow" onClick={getRandomNotesOnClick}>
                  Generate list of {numberOfNoteDisplayed} notes
                </Button>
                <IconButton
                  aria-label="plus"
                  onClick={() => changeNumberOfNoteDisplayed(1)}
                  disabled={numberOfNoteDisplayed === NOTES_LIST_MAX}
                >
                  <FaPlus />
                </IconButton>
              </ButtonGroup>
              <ButtonGroup variant="outline" className="flex flex-row items-stretch justify-stretch">
                <Button
                  className="grow"
                  variant={isStringVisible ? 'outline' : 'subtle'}
                  gap={2}
                  onClick={toggleStringVisible}
                >
                  <FaGuitar />
                  Toggle string
                </Button>
                <Button
                  className="grow"
                  variant={isColorVisible ? 'outline' : 'subtle'}
                  gap={2}
                  onClick={toggleColorVisible}
                >
                  <BiSolidColor />
                  Toggle color
                </Button>
              </ButtonGroup>
              <NoteSelector />
              <AutoSkipper />
            </div>
          </Popover.Body>
        </Popover.Content>
      </Popover.Positioner>
    </Popover.Root>
  );
};
