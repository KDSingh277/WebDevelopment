import { Box, Button } from '@chakra-ui/react'

function Post({image, name}){
    const handleClick = (otterName) => {
        return console.log('You clicked on' + otterName)
    }
    return (
        <Box as="li" className='post-component'>
            <Button onClick = {() => handleClick(name)} h="auto" p={4} flexDirection="column" colorScheme="teal" variant="solid">
                <img src={image} alt={name} />
                <p className='post-name'>{name}</p>
            </Button>
        </Box>
    )
}

export default Post