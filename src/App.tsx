import { Button, ChakraProvider } from "@chakra-ui/react";
import { ChordsPage, NotesPage } from "./pages";
import { AppPages } from "./config";
import { useState } from "react";

const App = () => {
  const [selectedPage, setSelectedPage] = useState(AppPages.notes);

  return (
    <ChakraProvider>
      <div className="h-screen flex flex-col items-center justify-between">
        {selectedPage === AppPages.notes && (
          <Button variant="ghost" colorScheme="purple" onClick={() => setSelectedPage(AppPages.chords)}>
            Switch to chords
          </Button>
        )}
        {selectedPage === AppPages.chords && (
          <Button variant="ghost" colorScheme="blue" onClick={() => setSelectedPage(AppPages.notes)}>
            Switch to notes
          </Button>
        )}
        {selectedPage === AppPages.notes && <NotesPage />}
        {selectedPage === AppPages.chords && <ChordsPage />}
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
