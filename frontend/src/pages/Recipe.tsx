import { ChevronLeftIcon, StarIcon } from '@chakra-ui/icons'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'


function Recipe() {
  // const dummyDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
  const dummyDescription = 'Lorem ipsum dolor sit amet,'
  const dummyList = [
    'consectetur adipiscing elit',
    'd do eiusmod tempor incidi',
    't labore et dolore magna a',
  ]

  return (
    <>
      <Flex justify={'space-around'} align={'stretch'} padding={'1rem 0.7rem 0.7rem 0.7rem'} w={'100%'} maxWidth={'1024px'} boxShadow='dark-lg'>
        <ChevronLeftIcon />
        <StarIcon />
      </Flex>

      <>
        <Box 
          bg="url('/cake.jpeg')"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          height={{ base: '250px', sm: '600px' }}  
        >
        </Box>
        <Box
            bgColor='red.50'
            textAlign='left'
            margin='-7% 0'
            padding={{ base: '7% 5% 25% 5%', sm: '5% 5% 15% 5%'}}
            minHeight={{ base: '100px', sm: '300px' }} 
            borderRadius={{ base: '10% 10% 0 0', sm: '5% 5% 0 0'}}
            boxShadow='dark-lg'
          >
            <Heading as='h2' size={['md', 'xl']}>Title</Heading>
            <Text fontSize={['xs', 'lg']} align='left'>{dummyDescription}</Text>
          </Box>
        <Box
          margin={{ base: '-14% 0', sm: '-10% 0'}}
          >
          <Tabs variant='enclosed' colorScheme='red'>
            <TabList >
              <Tab _selected={{ bg: 'red.100' }}>Ingredients</Tab>
              <Tab _selected={{ bg: 'red.100' }}>Instruction</Tab>
            </TabList>

            <TabPanels>
              <TabPanel 
                bgColor={'red.100'}
                minHeight={{ base: '400px', sm: '500px' }}
                padding='5%'
                align='left'
              >
                {dummyList 
                  ? dummyList.map((ing, i) => (
                    <Text key={i}>{ing}</Text>
                  ))
                  : null
                }
              </TabPanel>

              <TabPanel 
                bgColor={'red.100'}
                minHeight={{ base: '400px', sm: '500px' }}
                padding='5%'
                align='left'
              >
                {dummyList 
                  ? dummyList.map((ing, i) => (
                    <Text key={i}>{ing}</Text>
                  ))
                  : null
                }
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </>

      
    </>
  )
}

export default Recipe
