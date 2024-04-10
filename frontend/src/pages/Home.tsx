import { Flex, Spacer, Heading, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'

import RecipeCard from '../components/RecipeCard'

function Home() {

  return (
    <>
      <Flex justify={'space-around'} align={'stretch'} padding={'1rem 0.7rem 0.7rem 0.7rem'} w={'100%'} maxWidth={'1024px'}>
        <Heading as='h1' size='lg' color='red.400' paddingRight={'1rem'}>RecipeBook</Heading>
        <Spacer />
        <InputGroup>
          <InputLeftElement pointerEvents='none'>
            <Search2Icon color='gray.300' />
          </InputLeftElement>
          <Input variant='filled' size='md' placeholder='I want to eat...' />
        </InputGroup>
      </Flex>
      <Tabs variant='enclosed' colorScheme='red'>
        <TabList>
          <Tab _selected={{ bg: 'red.50' }}>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabList>

        <TabPanels>
          <TabPanel bgColor={'red.50'}>
            <RecipeCard />
          </TabPanel>

          <TabPanel>
            <p>two!</p>
          </TabPanel>

          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  )
}

export default Home
