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
import ReactMarkdown from 'react-markdown';

const Main = () => {
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
          placeholder="タイトルを入力してください。"
          outline="1px solid teal"
        />
        <Textarea
          placeholder="ノート内容を記入してください。（マークダウン形式で入力できます。）"
          size="lg"
          resize="None"
          h="30vh"
          outline="1px solid teal"
        />
      </Stack>
      <Button colorScheme="blue" size="lg" p={5} m="auto">
        編集
      </Button>
      <Divider my={1} />
      <Stack h="43vh" bg="gray.100" spacing={2} py={2} px={50}>
        <Heading as="h2" size="md" m={3} h={3}></Heading>
        <Box
          bg="white"
          m={5}
          p={15}
          fontSize="lg"
          border="1px solid #ddd"
          h="40vh"
        >
          <ReactMarkdown></ReactMarkdown>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Main;
