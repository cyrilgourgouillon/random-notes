import { Button, ChakraProvider } from "@chakra-ui/react";
import { ChordsPage, NotesPage } from "./pages";
import { AppPages } from "./config";
import { useState } from "react";
import { NoteSettingsContextProvider } from "./contexts/NoteContext";
import { ChordSettingsContextProvider } from "./contexts/ChordContext";
import { SpeedContextProvider } from "./contexts/SpeedContext";

const App = () => {
  const [selectedPage, setSelectedPage] = useState(AppPages.notes);

  return (
    <ChakraProvider>
      <div className="h-screen flex flex-col items-center justify-between">
        {selectedPage === AppPages.notes && (
          <Button
            variant="ghost"
            colorScheme="purple"
            onClick={() => setSelectedPage(AppPages.chords)}
          >
            Switch to chords
          </Button>
        )}
        {selectedPage === AppPages.chords && (
          <Button
            variant="ghost"
            colorScheme="blue"
            onClick={() => setSelectedPage(AppPages.notes)}
          >
            Switch to notes
          </Button>
        )}
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
        <div className="mb-5">
          {"Made with ❤️ by "}
          <a
            href="https://github.com/cyrilgourgouillon"
            target="_blank"
            className="text-red-700"
          >
            Cyril Gourgouillon
          </a>
        </div>
      </div>
    </ChakraProvider>
  );
};

export default App;
