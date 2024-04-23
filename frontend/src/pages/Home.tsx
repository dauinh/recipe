import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"

import { Flex, Spacer, Heading, Input, InputGroup, InputLeftElement, Button } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { AddIcon, Search2Icon } from '@chakra-ui/icons'

import RecipeCard from '../components/RecipeCard'

export default function Home() {
  const navigate = useNavigate()
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/api/recipes')
      .then((res) => {
        return res.json();
      })
      .then((data): void => {
        setRecipes(data)
      })
  }, [])

  return (
    <>
      <Flex justify={'space-around'} align={'stretch'} padding={'1rem 0.7rem 0.7rem 0.7rem'} w={'100%'} boxShadow='md'>
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
        <TabList overflowX='scroll'>
          <Tab _selected={{ bg: 'red.50' }}>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
          <Tab>Four</Tab>
          <Tab>Five</Tab>
          <Tab>Six</Tab>
          <Tab>Seven</Tab>
        </TabList>

        <TabPanels>
          <TabPanel bgColor={'red.50'}>
          {recipes 
            ? recipes.map((recipe, i) => (
              <RecipeCard key={i} id={recipe.id} title={recipe.title} description={recipe.description} />
            ))
            : null}
          </TabPanel>

          <TabPanel>
            <p>two!</p>
          </TabPanel>

          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Button
        background='green'
        pos='fixed'
        right='5vw'
        bottom='10vh'
        zIndex='1'
        onClick={() => {navigate(`recipes/add`)}}
      ><AddIcon color='white'/></Button>
    </>
  )
}
