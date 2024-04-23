import { ChevronLeftIcon, StarIcon } from '@chakra-ui/icons'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


export default function Recipe() {
  let { id } = useParams()
  const [ data, setData ] = useState()

  useEffect(() => {
    fetch(`http://localhost:8080/api/recipes/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data): void => {
        setData(data)
      })
  }, [])

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
            <Heading as='h2' size={['md', 'xl']}>{data ? data.title : "Title"}</Heading>
            <Text fontSize={['xs', 'lg']} align='left'>{data ? data.description : "Description"}</Text>
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
                {data 
                  ? data.ingredients.split(',').map((ing, i) => (
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
                {data 
                  ? data.instruction.split('\n').map((step, i) => (
                    <Text key={i}>{step}</Text>
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
