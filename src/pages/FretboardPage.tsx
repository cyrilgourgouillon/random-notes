import { Button } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Fretboard, FretboardSettings } from '../components';
import { chromaticNotes, enharmonicNotes, guitarStringNames, notes, type Note } from '../config';

type FretboardChallenge = {
  fret: number;
  stringIndex: number;
  acceptedNotes: Note[];
};

type NoteGroup = {
  primary: Note;
  enharmonic: Note | null;
};

const fretCount = 12;
const answerDelay = 600;

const getRandomNumber = (max: number) => Math.floor(Math.random() * max);

const getAcceptedNotes = (stringIndex: number, fret: number): Note[] => {
  const openStringNote = guitarStringNames[stringIndex];
  const openStringNoteIndex = chromaticNotes.indexOf(openStringNote);
  const note = chromaticNotes[(openStringNoteIndex + fret) % chromaticNotes.length];
  const enharmonicNote = enharmonicNotes[note];

  return enharmonicNote ? [note, enharmonicNote] : [note];
};

const getNoteGroups = (): NoteGroup[] => {
  const seen = new Set<Note>();
  const groups: NoteGroup[] = [];

  for (const note of notes) {
    if (!seen.has(note)) {
      const enharmonic = enharmonicNotes[note];
      groups.push({
        primary: note,
        enharmonic: enharmonic || null,
      });
      seen.add(note);
      if (enharmonic) {
        seen.add(enharmonic);
      }
    }
  }

  return groups;
};

const getRandomChallenge = (): FretboardChallenge => {
  const stringIndex = getRandomNumber(guitarStringNames.length);
  const fret = getRandomNumber(fretCount) + 1;

  return {
    fret,
    stringIndex,
    acceptedNotes: getAcceptedNotes(stringIndex, fret),
  };
};

export const FretboardPage = () => {
  const [challenge, setChallenge] = useState(getRandomChallenge);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [answerHistory, setAnswerHistory] = useState<Note[]>([]);
  const [showStringLabels, setShowStringLabels] = useState(true);
  const [showFretNumbers, setShowFretNumbers] = useState(true);

  useEffect(() => {
    if (!selectedNote) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      if (isAnswerCorrect) {
        setChallenge(getRandomChallenge());
        setAnswerHistory([]);
      }
      setSelectedNote(null);
      setIsAnswerCorrect(false);
    }, answerDelay);

    return () => window.clearTimeout(timeoutId);
  }, [isAnswerCorrect, selectedNote]);

  const handleNoteClick = (noteGroup: NoteGroup) => {
    if (selectedNote) {
      return;
    }

    const notesToCheck = [noteGroup.primary, noteGroup.enharmonic].filter((note): note is Note => note !== null);

    if (notesToCheck.some((note) => challenge.acceptedNotes.includes(note))) {
      setSelectedNote(noteGroup.primary);
      setIsAnswerCorrect(true);
    } else {
      setAnswerHistory([...answerHistory, ...notesToCheck]);
    }
  };

  const getButtonColorScheme = (noteGroup: NoteGroup) => {
    const notesToCheck = [noteGroup.primary, noteGroup.enharmonic].filter((note): note is Note => note !== null);
    const isNoteInHistory = notesToCheck.some((note) => answerHistory.includes(note));

    if (isNoteInHistory) {
      return 'red';
    }

    if (!notesToCheck.includes(selectedNote ?? ('' as Note))) {
      return 'gray';
    }

    return isAnswerCorrect ? 'green' : 'red';
  };

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div className="w-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-8">
          <Fretboard
            markers={[
              {
                fret: challenge.fret,
                stringIndex: challenge.stringIndex,
                color: '#ef4444',
              },
            ]}
            showStringLabels={showStringLabels}
            showFretNumbers={showFretNumbers}
          />
          <div className="flex flex-row flex-wrap justify-center gap-2 px-4 max-w-3xl">
            {getNoteGroups().map((noteGroup) => {
              const notesToCheck = [noteGroup.primary, noteGroup.enharmonic].filter(
                (note): note is Note => note !== null,
              );
              const buttonLabel = noteGroup.enharmonic
                ? `${noteGroup.primary} ${noteGroup.enharmonic}`
                : noteGroup.primary;

              return (
                <Button
                  key={noteGroup.primary}
                  variant={notesToCheck.includes(selectedNote ?? ('' as Note)) ? 'solid' : 'outline'}
                  colorPalette={getButtonColorScheme(noteGroup)}
                  onClick={() => handleNoteClick(noteGroup)}
                  disabled={
                    notesToCheck.some((note) => answerHistory.includes(note)) ||
                    Boolean(selectedNote && !notesToCheck.includes(selectedNote))
                  }
                  size="2xl"
                >
                  {buttonLabel}
                </Button>
              );
            })}
          </div>
          <FretboardSettings
            showStringLabels={showStringLabels}
            showFretNumbers={showFretNumbers}
            toggleStringLabels={() => setShowStringLabels((isVisible) => !isVisible)}
            toggleFretNumbers={() => setShowFretNumbers((isVisible) => !isVisible)}
          />
        </div>
      </div>
    </div>
  );
};
