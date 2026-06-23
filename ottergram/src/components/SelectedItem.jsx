import { Box, Image, Heading } from '@chakra-ui/react';

function SelectedItem({ image, name }) {
  return (
    <Box w="100%" bg="whiteAlpha.050" p={6} borderRadius="md">
      <Image src={image} alt={name} w="100%" borderRadius="md" objectFit="cover" />
      <Heading as="h2" size="lg" color="white" mt={4}>
        {name}
      </Heading>
    </Box>
  );
}

export default SelectedItem;