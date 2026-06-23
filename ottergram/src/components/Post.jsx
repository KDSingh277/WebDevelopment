import { Box, Button } from '@chakra-ui/react'

function Post({image, name}){
    // const handleClick = (otterName) => {
    //     return console.log('You clicked on' + otterName)
    // }
    const mouseOver = (otterName) => {
        return console.log('Hello, ' + otterName)
    }
    const mouseAway = (otterName) => {
        return console.log('Goodbye, ' + otterName)
    }
    return (
        <Box as="li" className='post-component'>
            <Button onMouseEnter = {() => mouseOver(name)} onMouseLeave={() => mouseAway(name)} 
            h="auto" p={4} flexDirection="column" colorScheme="teal" variant="solid">
                <img src={image} alt={name} />
                <p className='post-name'>{name}</p>
            </Button>
        </Box>
    )
}

export default Post