import { Heading, Text, Image, Card, Button, Flex } from '@chakra-ui/react'
import cakeImg from '../assets/cake.jpeg'

function RecipeCard() {
  const dummyDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
  const maxLength = 60
  const description = dummyDescription.length > maxLength ? dummyDescription.slice(0,maxLength) + "..." : dummyDescription

  return (
    <Card
        direction='row'
        overflow='hidden'
        variant='elevated'
        size='md'
        >
        <Image
            borderRadius="lg"
            width='100%'
            height='100%'
            maxH={{ base: '150px', sm: '300px' }}
            maxW={{ base: '150px', sm: '300px' }}
            src={cakeImg}
            alt='chocolate cake with berries'
        />

        <Flex align='flex-start' direction='column' padding='1rem 1rem 0'>
            <Heading as='h2' size='md'>Title</Heading>

            <Text fontSize='xs' align='left'>{description}</Text>
            <Button variant='solid' colorScheme='gray' size='sm' marginTop='1rem'>
                See more
            </Button>
        </Flex>
        </Card>
  )
}

export default RecipeCard
