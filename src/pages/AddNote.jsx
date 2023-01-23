import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import ReactMarkdown from 'react-markdown';
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

import { auth, db } from '../../lib/firebase';

const AddNote = () => {
  const [title, setTitle] = useState(' ');
  const [content, setContent] = useState(' ');

  const navigate = useNavigate();

  const createNote = async () => {
    await addDoc(collection(db, 'posts'), {
      title: title || 'no title',
      content: content || 'no content',
      modDate: Date.now(),
      author: {
        username: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      },
    });
    navigate('/noteList');
  };

  return (
    <Flex
      w="90%"
      h="100vh"
      m="auto"
      flexDirection="column"
      border="1px solid #ddd"
    >
      <Button w={40} colorScheme="teal" size="md" mt={5} ml="auto" mr={5}>
        <Link to="/noteList"> Note 一覧</Link>
      </Button>
      <Stack spacing={5} py={5} px={250}>
        <Input
          placeholder="タイトルを入力してください。"
          outline="1px solid teal"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Textarea
          placeholder="ノート内容を記入してください。（マークダウン形式で入力できます。）"
          size="lg"
          resize="None"
          h="30vh"
          outline="1px solid teal"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </Stack>
      <Button
        w={40}
        colorScheme="blue"
        size="lg"
        m="auto"
        mb="5"
        onClick={createNote}
      >
        保存
      </Button>
      <Divider />
      <Stack h="50vh" bg="gray.100" spacing={2} py={2} px={50}>
        <Heading as="h2" size="md" m={3} h={3}>
          {title}
        </Heading>
        <Box
          bg="white"
          m={5}
          p={15}
          fontSize="lg"
          border="1px solid #ddd"
          h="35vh"
        >
          <ReactMarkdown>{content}</ReactMarkdown>
        </Box>
      </Stack>
    </Flex>
  );
};

export default AddNote;
