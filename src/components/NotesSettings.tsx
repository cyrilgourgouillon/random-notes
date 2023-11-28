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
import { Speed } from '../config';

export const NotesSettings = () => {
  const { numberOfNoteDisplayed, getRandomNotesOnClick, changeNumberOfNoteDisplayed, toggleStringVisible } =
    useNoteSettingsContext();

  const handleOnSpeedChange = (speed: Speed | undefined) => {
    setCurrentSpeed(speed);
  }

  return (
    <Popover>
      <PopoverTrigger>
        <IconButton icon={<MdBuild />} aria-label={'settings'}>
          Settings
        </IconButton>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverBody>
          <div className="flex flex-col gap-3 items-stretch">
            <ButtonGroup variant="outline">
              <IconButton
                aria-label="minus"
                icon={<FaMinus />}
                onClick={() => changeNumberOfNoteDisplayed(-1)}
                disabled={numberOfNoteDisplayed === NOTES_LIST_MIN}
              />
              <Button onClick={getRandomNotesOnClick}>Generate list of {numberOfNoteDisplayed} notes</Button>
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
            <AutoSkipper onSkip={getRandomNotesOnClick} onSpeedChange={handleOnSpeedChange} />
          </div>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
