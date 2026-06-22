import { Box, Button, VStack, Heading } from '@chakra-ui/react';

import './App.css';
import Header from './components/Header';
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
        <li className='post-component'>
          {/* h="auto" and flexDirection="column" fix the overlapping issue */}
          <Button h="auto" p={4} flexDirection="column" colorScheme="teal" variant="solid">
            <img src={Barry} alt="Barry" />
            <p>Barry</p>
          </Button>
        </li>
        <li className='post-component'>
          <Button h="auto" p={4} flexDirection="column" colorScheme="teal" variant="solid">
            <img src={Robin} alt="Robin" />
            <p>Robin</p>
          </Button>
        </li>
        <li className='post-component'>
          <Button h="auto" p={4} flexDirection="column" colorScheme="teal" variant="solid">
            <img src={Maurice} alt="Maurice" />
            <p>Maurice</p>
          </Button>
        </li>
        <li className='post-component'>
          <Button h="auto" p={4} flexDirection="column" colorScheme="teal" variant="solid">
            <img src={Lesley} alt="Lesley" />
            <p>Lesley</p>
          </Button>
        </li>
        <li className='post-component'>
          <Button h="auto" p={4} flexDirection="column" colorScheme="teal" variant="solid">
            <img src={Barbara} alt="Barbara" />
            <p>Barbara</p>
          </Button>
        </li>
      </VStack>
    </Box>
  )
}

export default App;