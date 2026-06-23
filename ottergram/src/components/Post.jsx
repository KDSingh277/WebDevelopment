import { Box, Button } from '@chakra-ui/react'

function Post({image, name, setSelectedPostName}){
    return (
        <Box as="li" className='post-component'>
            <Button onClick = {() => setSelectedPostName(name)} h="auto" p={4} flexDirection="column" colorScheme="teal" variant="solid">
                <img src={image} alt={name} />
                <p className='post-name'>{name}</p>
            </Button>
        </Box>
    )
}

export default Post