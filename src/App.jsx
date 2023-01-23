import { Flex } from '@chakra-ui/react';
import Sidebar from '../components/Sidebar';

function App() {
  return (
    <Flex w="100%" h="100vh" bg="green.50">
      <Sidebar />

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
}
export default App;
