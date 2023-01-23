import {
  Flex,
  Box,
  Stack,
  Button,
  Input,
  Textarea,
  Divider,
  Heading,
} from '@chakra-ui/react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';

import ReactMarkdown from 'react-markdown';

const Main = ({ activeNote, onUpdateNote }) => {
  const onEditNote = (key, value) => {
    onUpdateNote({
      ...activeNote,
      [key]: value,
    });
  };

  const handleEdit = () => {
    const editData = async () => {
      const nowData = doc(db, 'notes', activeNote.id);

      await updateDoc(nowData, {
        title: activeNote.title,
        content: activeNote.content,
        modDate: Date.now(),
      });
    };
    editData();
  };

  if (!activeNote) {
    return (
      <Box
        w="70%"
        h="100vh"
        lineHeight="100vh"
        textAlign="center"
        fontSize="2rem"
        color="gray.600"
      >
        Noteが選択されていません
      </Box>
    );
  }

  return (
    <Flex
      w="70%"
      h="100vh"
      m="auto"
      flexDirection="column"
      border="1px solid #ddd"
    >
      <Button colorScheme="teal" size="lg" p={3} mt={5} ml="auto" mr={5}>
        ログアウト
      </Button>
      <Stack spacing={5} py={5} px={100}>
        <Input
          outline="1px solid teal"
          value={activeNote.title}
          onChange={(e) => {
            onEditNote('title', e.target.value);
          }}
        />
        <Textarea
          size="lg"
          resize="None"
          h="30vh"
          outline="1px solid teal"
          value={activeNote.content}
          onChange={(e) => {
            onEditNote('content', e.target.value);
          }}
        />
      </Stack>
      <Button colorScheme="blue" size="lg" p={5} m="auto" onClick={handleEdit}>
        編集
      </Button>
      <Divider my={1} />
      <Stack h="43vh" bg="gray.100" spacing={2} py={2} px={50}>
        <Heading as="h2" size="md" m={3} h={3}>
          {activeNote.title}
        </Heading>
        <Box
          bg="white"
          m={5}
          p={15}
          fontSize="lg"
          border="1px solid #ddd"
          h="40vh"
        >
          <ReactMarkdown>{activeNote.content}</ReactMarkdown>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Main;
