import { ChordsList, ChordsSettings } from "../components";

import { useChordSettingsContext } from "../hooks";

export const ChordsPage = () => {
  const { chords, isShapeVisible, cagedPosition, getRandomChordsOnClick } =
    useChordSettingsContext();

  const ShapeDecorator: React.ReactNode = (
    <div className={`${isShapeVisible ? "" : "invisible"}`}>
      {cagedPosition}
    </div>
  );

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div className="w-screen flex items-center justify-center">
        <div className="flex flex-col items-center">
          <ChordsList
            chords={chords}
            ShapeDecorator={ShapeDecorator}
            onClick={getRandomChordsOnClick}
          />
          <ChordsSettings />
        </div>
      </div>
    </div>
  );
};
