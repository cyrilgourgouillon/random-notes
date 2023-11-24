import { ChakraProvider } from "@chakra-ui/react";
import { NotesPage } from "./pages";

const App = () => {
  return (
    <ChakraProvider>
      <div className="h-screen flex flex-col items-center justify-between">
        <NotesPage />
        {/*<ChordsPage />*/}
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
