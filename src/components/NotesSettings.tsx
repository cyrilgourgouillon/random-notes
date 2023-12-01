import {
  ButtonGroup,
  IconButton,
  Button,
  PopoverContent,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverTrigger,
} from '@chakra-ui/react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { MdBuild } from 'react-icons/md';
import { NOTES_LIST_MIN, NOTES_LIST_MAX } from '../config/constants';
import { AutoSkipper } from './AutoSkipper';
import { useNoteSettingsContext } from '../hooks';
import { NoteSelector } from '.';

export const NotesSettings = () => {
  const { numberOfNoteDisplayed, getRandomNotesOnClick, changeNumberOfNoteDisplayed, toggleStringVisible } =
    useNoteSettingsContext();

  return (
    <Popover>
      <PopoverTrigger>
        <IconButton icon={<MdBuild />} aria-label={'settings'}>
          Settings
        </IconButton>
      </PopoverTrigger>
      <PopoverContent width={'350px'}>
        <PopoverArrow />
        <PopoverBody>
          <div className="flex flex-col gap-3 items-stretch w-full">
            <ButtonGroup variant='outline' className="flex flex-row items-stretch justify-stretch">
              <IconButton
                aria-label="minus"
                icon={<FaMinus />}
                onClick={() => changeNumberOfNoteDisplayed(-1)}
                disabled={numberOfNoteDisplayed === NOTES_LIST_MIN}
              />
              <Button className='flex-grow' onClick={getRandomNotesOnClick}>Generate list of {numberOfNoteDisplayed} notes</Button>
              <IconButton
                aria-label="plus"
                icon={<FaPlus />}
                onClick={() => changeNumberOfNoteDisplayed(1)}
                disabled={numberOfNoteDisplayed === NOTES_LIST_MAX}
              />
            </ButtonGroup>
            <Button variant="outline" leftIcon={<MdBuild />} onClick={toggleStringVisible}>
              Toggle string complexity
            </Button>
            <NoteSelector />
            <AutoSkipper />
          </div>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
