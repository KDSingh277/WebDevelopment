import { Box, Button, VStack, Heading } from '@chakra-ui/react';

import './App.css';
import Header from './components/Header';
import Post from './components/Post';
import Barry from './otters/otter1.jpg';
import Robin from './otters/otter2.jpg';
import Maurice from './otters/otter3.jpg';
import Lesley from './otters/otter4.jpg';
import Barbara from './otters/otter5.jpg';

function App() {
  return (
    // Wrap the app in a Box to apply a nice background color that fills the screen
    <Box bg="blue.800" minH="100vh" color="white" pb={10}>
      <Header />
      
      {/* align="flex-start" moves everything to the left.
        spacing={8} increases the gap between items.
      */}
      <VStack as="ul" spacing={8} align="flex-start" className='post-list'>
        <Post image = {Barry} name = 'Barry'/>
        <Post image = {Robin} name = 'Robin'/>
        <Post image = {Maurice} name = 'Maurice'/>
        <Post image = {Lesley} name = 'Lesley'/>
        <Post image = {Barbara} name = 'Barbara'/>
      </VStack>
    </Box>  
  )
}

export default App;