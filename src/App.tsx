import { Button, ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { ChordsPage, FretboardPage, NotesPage } from './pages';
import { AppPages } from './config';
import { useState } from 'react';
import { NoteSettingsContextProvider } from './contexts/NoteContext';
import { ChordSettingsContextProvider } from './contexts/ChordContext';
import { SpeedContextProvider } from './contexts/SpeedContext';
import { AppToaster } from './components/ui/toaster';

const App = () => {
  const [selectedPage, setSelectedPage] = useState(AppPages.notes);

  return (
    <ChakraProvider value={defaultSystem}>
      <AppToaster />
      <div className="h-screen flex flex-col items-center justify-between">
        <div className="flex flex-row gap-4">
          <Button size="lg" variant="ghost" colorPalette="blue" onClick={() => setSelectedPage(AppPages.notes)}>
            Notes
          </Button>
          <Button size="lg" variant="ghost" colorPalette="purple" onClick={() => setSelectedPage(AppPages.chords)}>
            Chords
          </Button>
          <Button size="lg" variant="ghost" colorPalette="orange" onClick={() => setSelectedPage(AppPages.fretboard)}>
            Fretboard
          </Button>
        </div>
        {selectedPage === AppPages.notes && (
          <SpeedContextProvider>
            <NoteSettingsContextProvider>
              <NotesPage />
            </NoteSettingsContextProvider>
          </SpeedContextProvider>
        )}
        {selectedPage === AppPages.chords && (
          <SpeedContextProvider>
            <ChordSettingsContextProvider>
              <ChordsPage />
            </ChordSettingsContextProvider>
          </SpeedContextProvider>
        )}
        {selectedPage === AppPages.fretboard && <FretboardPage />}
        <div className="mb-5">
          {'Made with ❤️ by '}
          <a href="https://github.com/cyrilgourgouillon" target="_blank" className="text-red-700">
            Cyril Gourgouillon
          </a>
        </div>
      </div>
    </ChakraProvider>
  );
};

export default App;
