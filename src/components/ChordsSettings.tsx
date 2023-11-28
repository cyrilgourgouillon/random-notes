import {
  ButtonGroup,
  IconButton,
  Button,
  PopoverContent,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverTrigger,
} from "@chakra-ui/react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { MdBuild } from "react-icons/md";
import { CHORDS_LIST_MIN, CHORDS_LIST_MAX } from "../config/constants";
import { AutoSkipper } from "./AutoSkipper";
import { useChordSettingsContext } from "../hooks";

export const ChordsSettings = () => {
  const {
    numberOfChordDisplayed,
    getRandomChordsOnClick,
    changeNumberOfChordDisplayed,
    toggleShapeVisible,
  } = useChordSettingsContext();

  return (
    <Popover>
      <PopoverTrigger>
        <IconButton icon={<MdBuild />} aria-label={"settings"}>
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
                onClick={() => changeNumberOfChordDisplayed(-1)}
                disabled={numberOfChordDisplayed === CHORDS_LIST_MIN}
              />
              <Button onClick={getRandomChordsOnClick}>
                Generate list of {numberOfChordDisplayed} chords
              </Button>
              <IconButton
                aria-label="plus"
                icon={<FaPlus />}
                onClick={() => changeNumberOfChordDisplayed(1)}
                disabled={numberOfChordDisplayed === CHORDS_LIST_MAX}
              />
            </ButtonGroup>
            <Button
              variant="outline"
              leftIcon={<MdBuild />}
              onClick={toggleShapeVisible}
            >
              Toggle shape complexity
            </Button>
            <AutoSkipper />
          </div>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
