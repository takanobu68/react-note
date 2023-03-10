import { Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../lib/firebase';

import Sidebar from '../components/Sidebar';
import Main from '../components/Main';

const NoteList = () => {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    const getNotes = async () => {
      const data = await getDocs(collection(db, 'notes'));
      setNotes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getNotes();
  }, []);

  const onDeleteNote = async (id) => {
    await deleteDoc(doc(db, 'notes', id));
    const data = await getDocs(collection(db, 'notes'));
    setNotes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      } else {
        return note;
      }
    });
    setNotes(updatedNotesArray);
  };

  return (
    <Flex w="100%" h="100vh" bg="green.50">
      <Sidebar
        notes={notes}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
    </Flex>
  );
};

export default NoteList;
