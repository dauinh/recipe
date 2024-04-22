import { useNavigate } from "react-router-dom"
import { Heading, Text, Image, Card, Button, Flex } from '@chakra-ui/react'
import cakeImg from '../assets/cake.jpeg'

function RecipeCard({...props}) {
  const navigate = useNavigate()
  const { id, title, description } = props

  return (
    <Card
        direction='row'
        overflow='hidden'
        variant='elevated'
        size='md'
        m='1rem 0'
        >
        <Image
            borderRadius="lg"
            width={{ base: '150px', sm: '300px' }}
            height={{ base: '150px', sm: '300px' }}
            src={cakeImg}
            alt='chocolate cake with berries'
        />

        <Flex align='flex-start' direction='column' padding='1rem 1rem 0'>
            <Heading as='h2' size={['md', 'lg']}>{title}</Heading>

            <Text fontSize={['xs', 'md']} align='left' noOfLines={[3, 5, 10]}>{description}</Text>
            <Button 
                variant='solid' 
                colorScheme='gray' 
                size='sm' 
                marginTop='1rem' 
                onClick={() => {navigate(`recipes/${id}`)}}
            >See more
            </Button>
        </Flex>
        </Card>
  )
}

export default RecipeCard
