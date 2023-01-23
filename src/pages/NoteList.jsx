import { Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { db } from '../../lib/firebase';

import Sidebar from '../components/Sidebar';

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

  return (
    <Flex w="100%" h="100vh" bg="green.50">
      <Sidebar notes={notes} />

      <div className="app-main">
        <div className="app-main-note-edit">
          <input id="title" type="text" />
          <textarea id="content" placeholder="ノート内容を記入"></textarea>
        </div>
        <div className="app-main-note-preview">
          <h1 className="preview-title">title</h1>
          <div className="markdown-preview">test</div>
        </div>
      </div>
    </Flex>
  );
};

export default NoteList;
