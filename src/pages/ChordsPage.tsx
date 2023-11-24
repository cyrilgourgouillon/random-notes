import { useState } from "react";
import { Button, IconButton } from "@chakra-ui/react";

import { FaPlus, FaMinus } from "react-icons/fa";

import { ChordsList } from "../components";

import { getListOfRandomChords, isValidChordCountList } from "../services";
import {
  DEFAULT_NUMBER_OF_CHORD,
  CHORDS_LIST_MAX,
  CHORDS_LIST_MIN,
} from "../config/constants";

export const ChordsPage = () => {
  const [chords, setChords] = useState(
    getListOfRandomChords(DEFAULT_NUMBER_OF_CHORD)
  );

  const [numberOfChordDisplayed, setNumberOfChordDisplayed] = useState(
    DEFAULT_NUMBER_OF_CHORD
  );

  const handleGetRandomChordOnClick = () => {
    setChords(getListOfRandomChords(numberOfChordDisplayed));
  };

  const handleChangeNumberOfChordDisplayed = (step: number) => {
    setNumberOfChordDisplayed((prevState: number) => {
      const value = prevState + step;
      if (isValidChordCountList(value)) {
        return value;
      }
      return prevState;
    });
  };

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div className="text-lg font-semibold mb-10">RANDOM CHORDS GENERATOR</div>
      <div className="w-screen flex items-center justify-center">
        <div className="flex flex-col items-center">
          <ChordsList chords={chords} />
          <div className="flex flex-col gap-1">
            <div className="flex gap-1">
              <IconButton
                aria-label="minus"
                icon={<FaMinus />}
                variant="outline"
                onClick={() => handleChangeNumberOfChordDisplayed(-1)}
                disabled={numberOfChordDisplayed === CHORDS_LIST_MIN}
              />
              <Button variant="outline" onClick={handleGetRandomChordOnClick}>
                Generate list of {numberOfChordDisplayed} chords
              </Button>
              <IconButton
                aria-label="plus"
                icon={<FaPlus />}
                variant="outline"
                onClick={() => handleChangeNumberOfChordDisplayed(1)}
                disabled={numberOfChordDisplayed === CHORDS_LIST_MAX}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
