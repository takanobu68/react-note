import {
  Box,
  Flex,
  Heading,
  Button,
  Stack,
  Divider,
  Text,
} from '@chakra-ui/react';

const Sidebar = ({ notes }) => {
  return (
    <Box overflowY="scroll" w="30%" h="100vh" border="1px solid #ddd">
      <Flex justifyContent="space-between" alignItems="center" p="5">
        <Heading as="h1" size="2xl">
          NoteBook
        </Heading>
        <Button colorScheme="twitter">追加</Button>
      </Flex>

      {notes.map((note) => (
        <Box
          bg="white"
          w="m"
          p={0.5}
          borderRadius="md"
          shadow="md"
          border="1px solid #ddd"
          m="0.5"
          key={note.id}
        >
          <Stack spacing={5} py={5} px={8}>
            <Flex justifyContent="space-between" alignItems="center">
              <Text fontSize="xl" as="b">
                {note.title}
              </Text>
              <Button colorScheme="blue" variant="outline">
                削除
              </Button>
            </Flex>
            <Divider my={5} />
            <p>{note.content}</p>
            <Divider my={5} />
            <small>
              {new Date(note.modDate).toLocaleDateString('ja-JP', {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </small>
          </Stack>
        </Box>
      ))}
    </Box>
  );
};

export default Sidebar;
