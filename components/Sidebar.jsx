import {
  Box,
  Flex,
  Heading,
  Button,
  Stack,
  Divider,
  Text,
} from '@chakra-ui/react';

const Sidebar = () => {
  return (
    <Box overflowY="scroll" w="30%" h="100vh" border="1px solid #ddd">
      <Flex justifyContent="space-between" alignItems="center" p="5">
        <Heading as="h1" size="2xl">
          NoteBook
        </Heading>
        <Button colorScheme="twitter">追加</Button>
      </Flex>
      <Box
        bg="white"
        w="m"
        p={0.5}
        borderRadius="md"
        shadow="md"
        border="1px solid #ddd"
      >
        <Stack spacing={5} py={5} px={8}>
          <Flex justifyContent="space-between" alignItems="center">
            <Text fontSize="xl" as="b">
              タイトル
            </Text>
            <Button colorScheme="blue" variant="outline">
              削除
            </Button>
          </Flex>
          <Divider my={5} />
          <p>
            コンテントzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzsssssssssssssssssssssssssssssssssssssssssssssssssssssssss
          </p>
          <small>最後の修正日：xxx</small>
        </Stack>
      </Box>
      <Box bg="white" w="m" p={2} borderRadius="md" shadow="md">
        <Stack spacing={5} py={4} px={10}>
          <Flex justifyContent="space-between" alignItems="center">
            <strong>タイトル</strong>
            <Button colorScheme="blue" variant="outline">
              削除
            </Button>
          </Flex>
          <Divider my={10} />
          <p>
            コンテントzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzsssssssssssssssssssssssssssssssssssssssssssssssssssssssss
          </p>
          <small>最後の修正日：xxx</small>
        </Stack>
      </Box>
      <Box bg="white" w="m" p={2} borderRadius="md" shadow="md">
        <Stack spacing={5} py={4} px={10}>
          <Flex justifyContent="space-between" alignItems="center">
            <strong>タイトル</strong>
            <Button colorScheme="blue" variant="outline">
              削除
            </Button>
          </Flex>
          <Divider my={10} />
          <p>
            コンテントzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzsssssssssssssssssssssssssssssssssssssssssssssssssssssssss
          </p>
          <small>最後の修正日：xxx</small>
        </Stack>
      </Box>
      <Box
        bg="white"
        w="m"
        p={2}
        border="1px solid #ddd"
        borderRadius="md"
        shadow="md"
      >
        <Stack spacing={5} py={4} px={10}>
          <div className="sidebar-note-title">
            <strong>タイトル</strong>
            <Button colorScheme="blue" variant="outline">
              削除
            </Button>
          </div>
          <Divider my={10} />
          <p>
            コンテントzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
          </p>
          <small>最後の修正日：xxx</small>
        </Stack>
      </Box>
      <Box
        bg="white"
        w="m"
        p={2}
        border="1px solid #ddd"
        borderRadius="md"
        shadow="md"
      >
        <Stack spacing={5} py={4} px={10}>
          <div className="sidebar-note-title">
            <strong>タイトル</strong>
            <Button colorScheme="blue" variant="outline">
              削除
            </Button>
          </div>
          <Divider my={10} />
          <p>
            コンテントzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzsssssssssssssssssssssssssssssssssssssssssssssssssssssssss
          </p>
          <small>最後の修正日：xxx</small>
        </Stack>
      </Box>
    </Box>
  );
};

export default Sidebar;
