import { useNavigate } from "react-router-dom"
import { Heading, Text, Image, Card, Button, Flex, Box } from '@chakra-ui/react'
import cakeImg from '../assets/cake.jpeg'

export default function RecipeCard({...props}) {
  const navigate = useNavigate()
  const { id, title, description } = props

  return (
    <Card
        direction='row'
        overflow='hidden'
        variant='elevated'
        size='md'
        m='1rem 0'
        borderRadius='10px'
        >
        <Image
            borderRadius='10px 0 0 10px'
            width={{ base: '150px', sm: '300px' }}
            height={{ base: '150px', sm: '300px' }}
            src={cakeImg}
            alt='chocolate cake with berries'
        />

        {/* <Flex align='flex-start' direction='column' width='100%' padding='1rem 1rem 0'> */}
        <Box width='100%' padding='1rem 1rem 0'>
            <Heading textAlign='left' as='h2' size={['md', 'lg']}>{title}</Heading>

            <Text fontSize={['xs', 'md']} align='left' noOfLines={[3, 5, 10]}>{description}</Text>
            <Button 
                variant='solid' 
                colorScheme='gray' 
                size='sm'
                marginLeft='auto'
                display='block'
                position='relative'
                bottom='3px'
                onClick={() => {navigate(`recipes/${id}`)}}
            >See more
            </Button>
        {/* </Flex> */}
        </Box>
        </Card>
  )
}
