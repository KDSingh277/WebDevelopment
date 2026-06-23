import { Box, HStack, VStack } from '@chakra-ui/react';

import './App.css';
import Header from './components/Header';
import Post from './components/Post';
import SelectedItem from './components/SelectedItem';

import Barry from './otters/otter1.jpg';
import Robin from './otters/otter2.jpg';
import Maurice from './otters/otter3.jpg';
import Lesley from './otters/otter4.jpg';
import Barbara from './otters/otter5.jpg';

const ottersArray = [
  { name: 'Barry', image: Barry },
  { name: 'Robin', image: Robin },
  { name: 'Maurice', image: Maurice },
  { name: 'Lesley', image: Lesley },
  { name: 'Barbara', image: Barbara },
]

function App() {
  return (
    // Wrap the app in a Box to apply a nice background color that fills the screen
    <Box bg="blue.800" minH="100vh" color="white" pb={10}>
      <Header />
      <HStack align="flex-start" spacing={8} px={6} py={4} alignItems="start">
        {/* align="flex-start" moves everything to the left.
          spacing={8} increases the gap between items. */}
        <VStack as="ul" spacing={8} align="flex-start" className='post-list'>
          {ottersArray.map((otter) => (
            <Post  key={otter.name} image={otter.image} name={otter.name} />
          ))}
        </VStack>

        <Box flex="1" minW= {0}>
          <SelectedItem 
            name = {ottersArray[0].name}
            image = {ottersArray[0].image}
          />
        </Box>
      </HStack>
    </Box>  
  )
}

export default App;