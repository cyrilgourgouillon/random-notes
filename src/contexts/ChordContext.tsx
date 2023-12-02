import { Dispatch, SetStateAction, createContext, useCallback, useEffect, useState } from 'react';
import { DEFAULT_NUMBER_OF_CHORD } from '../config/constants';
import { getListOfRandomChords, getRandomNoteFromCaged, isValidChordCountList } from '../services';
import { Caged, Chord, ChordType, chordTypes as allChordTypes } from '../config';
import { useSpeedContext } from '../hooks';

interface ChordSettingsContextProps {
	chords: Chord[];
	availableChordTypes: ChordType[];
	setAvailableChordTypes: Dispatch<SetStateAction<ChordType[]>>;
	numberOfChordDisplayed: number;
	isShapeVisible: boolean;
	cagedPosition: Caged;
	getRandomChordsOnClick: () => void;
	changeNumberOfChordDisplayed: (step: number) => void;
	toggleShapeVisible: () => void;
}

export const ChordSettingsContext = createContext<ChordSettingsContextProps | undefined>(undefined);

export const ChordSettingsContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [availableChordTypes, setAvailableChordTypes] = useState<ChordType[]>([...allChordTypes]);
	const [chords, setChords] = useState<Chord[]>(getListOfRandomChords(DEFAULT_NUMBER_OF_CHORD, availableChordTypes));
	const [numberOfChordDisplayed, setNumberOfChordDisplayed] = useState(DEFAULT_NUMBER_OF_CHORD);
	const [isShapeVisible, setIsShapeVisible] = useState(false);
	const [cagedPosition, setCagedPosition] = useState<Caged>(getRandomNoteFromCaged());

	const { speed, secondsElapsed, resetSecondsElapsed } = useSpeedContext();

	const changeNumberOfChordDisplayed = (step: number) => {
		setNumberOfChordDisplayed((prevState: number) => {
			const value = prevState + step;
			if (isValidChordCountList(value)) {
				return value;
			}
			return prevState;
		});
	};

	const toggleShapeVisible = () => {
		setIsShapeVisible((prevState: boolean) => !prevState);
	};

	const getRandomChordsOnClick = useCallback(() => {
		setChords(getListOfRandomChords(numberOfChordDisplayed, availableChordTypes));
		setCagedPosition(getRandomNoteFromCaged());
	}, [numberOfChordDisplayed, availableChordTypes]);

	useEffect(() => {
		if (speed && speed / 1000 === secondsElapsed) {
			getRandomChordsOnClick();
			resetSecondsElapsed();
		}
	}, [getRandomChordsOnClick, resetSecondsElapsed, secondsElapsed, speed]);

	useEffect(() => {
		resetSecondsElapsed();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [speed]);

	return (
		<ChordSettingsContext.Provider
			value={{
				chords,
				availableChordTypes,
				setAvailableChordTypes,
				numberOfChordDisplayed,
				isShapeVisible,
				cagedPosition,
				getRandomChordsOnClick,
				changeNumberOfChordDisplayed,
				toggleShapeVisible,
			}}
		>
			{children}
		</ChordSettingsContext.Provider>
	);
};
