import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import Login from './pages/Login';
import NoteList from './pages/NoteList';
import AddNote from './pages/AddNote';
import NotFound from './pages/NotFound';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Login />} />
          <Route path={`/noteList/`} element={<NoteList />} />
          <Route path={`/addNote/`} element={<AddNote />} />
          <Route path={`/*/`} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}
export default App;
