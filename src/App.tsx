import { ChakraProvider } from '@chakra-ui/react'
import { NotesPage } from "./pages";

const App = () => {
  return (
    <ChakraProvider>
      <NotesPage />
    </ChakraProvider>
  );
};

export default App;
