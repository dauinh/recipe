import { Flex, Spacer, Heading, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'

function Home() {

  return (
    <>
      <Flex justify={'space-around'} align={'stretch'}>
        <Heading as='h1' color='red.400'>RecipeBook</Heading>
        <Spacer />
        <InputGroup>
          <InputLeftElement pointerEvents='none'>
            <Search2Icon color='gray.300' />
          </InputLeftElement>
          <Input variant='filled' placeholder='What are you cooking today?' />
        </InputGroup>
      </Flex>
    </>
  )
}

export default Home
