import { Button, VStack } from '@chakra-ui/react'

function Post(Props){
    return (
        <li className='post-component'>
            <Button h="auto" p={4} flexDirection="column" colorScheme="teal" variant="solid">
                <img src={Props.image} alt={Props.name} />
                <p>{Props.name}</p>
            </Button>
        </li>
    )
}

export default Post